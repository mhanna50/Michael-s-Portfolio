import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import classNames from "classnames";

const TabsContext = createContext(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a <Tabs> parent component.");
  }
  return context;
}

export function Tabs({
  value: valueProp,
  defaultValue,
  onValueChange,
  className,
  children,
  ...props
}) {
  const isControlled = valueProp !== undefined;
  const [internalValue, setInternalValue] = useState(
    defaultValue ?? valueProp ?? null,
  );

  const value = isControlled ? valueProp : internalValue;

  const setValue = useCallback(
    (nextValue) => {
      if (!isControlled) {
        setInternalValue(nextValue);
      }
      if (onValueChange) {
        onValueChange(nextValue);
      }
    },
    [isControlled, onValueChange],
  );

  const contextValue = useMemo(
    () => ({
      value,
      setValue,
    }),
    [setValue, value],
  );

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, children, ...props }) {
  return (
    <div
      role="tablist"
      className={classNames("inline-flex gap-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, className, children, ...props }) {
  const { value: activeValue, setValue } = useTabsContext();
  const isActive = activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? "active" : "inactive"}
      className={classNames(
        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
        "text-[#6B6B6B] data-[state=active]:text-white",
        "bg-transparent data-[state=active]:bg-[#A8B8A0]",
        className,
      )}
      onClick={() => setValue(value)}
      {...props}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, className, children, ...props }) {
  const { value: activeValue } = useTabsContext();
  const isActive = activeValue === value;

  if (!isActive) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      data-state={isActive ? "active" : "inactive"}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}
