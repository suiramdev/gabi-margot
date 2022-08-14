import React from "react";
import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  outline?: boolean;
  className?: string;
};

function Button({ children, outline, className }: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "px-8 py-4 bg-primary rounded-2xl font-serif transition-colors",
        outline
          ? "bg-transparent hover:bg-primary/20 text-primary outline outline-primary outline-2"
          : "bg-primary hover:bg-primary-darken text-white",
        className
      )}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: undefined,
  outline: false,
};

export default Button;
