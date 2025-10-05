import React from "react";
import classNames from "classnames";

export function Button({ children, className, ...props }) {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded transition font-medium",
        "bg-soft-olive text-white hover:bg-sage",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
