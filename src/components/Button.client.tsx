import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Button({ children, className }: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "px-8 py-4 bg-primary text-white rounded-2xl",
        "hover:bg-primary-darken transition-colors",
        className
      )}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: undefined,
};

export default Button;
