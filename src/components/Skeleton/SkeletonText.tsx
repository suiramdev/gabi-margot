import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  width: number | string;
};

function SkeletonText({ className, width }: Props) {
  return (
    <div
      className={clsx(
        "h-[24px] relative rounded-full bg-content/20 animate-pulse",
        className
      )}
      style={{ width }}
    />
  );
}

SkeletonText.defaultProps = {
  className: "",
};

export default SkeletonText;
