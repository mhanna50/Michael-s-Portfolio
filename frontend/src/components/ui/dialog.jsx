import React, { createContext, useContext, useMemo } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";

const DialogContext = createContext(null);

function useDialogContext() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within a <Dialog> parent component.");
  }
  return context;
}

export function Dialog({ open, onOpenChange, children }) {
  const value = useMemo(
    () => ({
      open: Boolean(open),
      onOpenChange,
    }),
    [onOpenChange, open],
  );

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>;
}

export function DialogContent({ className, children, ...props }) {
  const { open, onOpenChange } = useDialogContext();

  if (!open || typeof document === "undefined") {
    return null;
  }

  const handleClose = () => onOpenChange?.(false);

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
        onClick={handleClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={classNames(
          "relative z-10 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl",
          className,
        )}
        {...props}
      >
        <button
          type="button"
          className="absolute right-5 top-5 text-2xl font-light text-[#A0A0A0] transition hover:text-[#4A4A4A]"
          aria-label="Close dialog"
          onClick={handleClose}
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export function DialogHeader({ className, children, ...props }) {
  return (
    <div className={classNames("space-y-2", className)} {...props}>
      {children}
    </div>
  );
}

export function DialogTitle({ className, children, ...props }) {
  return (
    <h2
      className={classNames("text-xl font-semibold text-[#2C2C2C]", className)}
      {...props}
    >
      {children}
    </h2>
  );
}
