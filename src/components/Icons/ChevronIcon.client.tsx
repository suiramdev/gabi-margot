import React from "react";

type Props = {
  className?: string;
  width?: string | number;
  height?: string | number;
};

function ChevronIcon({ className, width, height }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={width}
      height={height}
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
        clipRule="evenodd"
        stroke="currentColor"
        strokeWidth="1px"
      />
    </svg>
  );
}

ChevronIcon.defaultProps = {
  className: "",
  width: "32",
  height: "32",
};

export default ChevronIcon;
