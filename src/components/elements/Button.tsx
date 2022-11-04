import React from "react";
import clsx from "clsx";

type Props = {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

function Button({
  as: Component = "button",
  className,
  children,
  ...props
}: Props) {
  return (
    <Component
      className={clsx(
        "px-8 py-4 rounded-2xl font-serif font-bold text-lg transition-colors",
        "bg-primary hover:bg-primary-darken text-white hover:cursor-pointer",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-primary",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
