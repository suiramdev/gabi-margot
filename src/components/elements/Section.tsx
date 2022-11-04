import React from "react";
import clsx from "clsx";

type Props = {
  as?: React.ElementType;
  className?: string;
  title?: string;
  children?: React.ReactNode;
};

function Section({
  as: Component = "section",
  className,
  title,
  children,
  ...props
}: Props) {
  return (
    <Component
      className={clsx("flex flex-col items-center py-20", className)}
      {...props}
    >
      {title ? <h2 className="mb-12">{title}</h2> : null}
      {children}
    </Component>
  );
}

export default Section;
