import React from "react";
import { FaImage } from "react-icons/fa";

type Props = {
  width: number | string;
  height: number | string;
};

function SkeletonImage({ width, height }: Props) {
  return (
    <div
      className="relative rounded-md bg-gray-200 animate-pulse"
      style={{ width, height }}
    >
      <FaImage className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SkeletonImage;
