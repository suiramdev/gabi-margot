import React from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  width?: number | string;
  height?: number | string;
  amount?: number;
};

function SkeletonGrid({ className, width, height, amount }: Props) {
  return (
    <div
      className={clsx("relative flex flex-wrap gap-12 mask-image-b", className)}
      style={{ width, height }}
    >
      {[...Array(amount)].map((n) => (
        <div
          className="w-[200px] h-[250px] rounded-md bg-content/20 animate-pulse"
          key={n}
        />
      ))}
    </div>
  );
}

SkeletonGrid.defaultProps = {
  className: "",
  width: "100%",
  height: "100%",
  amount: 12,
};

export default SkeletonGrid;
