import React from "react";
import clsx from "clsx";
import { Image } from "@shopify/hydrogen";

type Tape = {
  invert?: boolean;
};

type Tilt = {
  hover?: boolean;
  invert?: boolean;
};

type Props = {
  image?: string;
  content?: string;
  tape?: Tape | boolean;
  tilt?: Tilt | boolean;
  className?: string;
  imageClassName?: string;
  soldOut?: boolean;
};

function Polaroid({
  tape,
  tilt,
  image,
  content,
  className,
  imageClassName,
  soldOut,
}: Props) {
  return (
    <figure
      className={clsx(
        "px-[8px] py-[10px] bg-[#eee6d8] drop-shadow-md",
        tape && [
          "before:content-[''] before:absolute before:w-[75px] before:h-[30px] before:top-[-10px] before:bg-[#DEDCC6]/80 before:-rotate-12",
          typeof tape !== "boolean" && tape.invert
            ? "before:left-[5px] before:rotate-12"
            : "before:right-[5px] before:-rotate-12",
        ],
        tilt && [
          typeof tilt !== "boolean" && tilt.invert ? "-skew-y-2" : "skew-y-2",
          typeof tilt !== "boolean" &&
            tilt.hover &&
            "hover:skew-y-0 hover:rotate-0 hover:scale-110 transition-all duration-200 hover:drop-shadow-xl",
        ],
        className
      )}
    >
      {image ? (
        // The weird thing, is that height is set to auto by default.
        <Image
          src={image}
          width="100%"
          height="100%"
          alt="Polaroid"
          className={clsx(
            "h-[175px] lg:h-[280px] aspect-square object-cover",
            imageClassName
          )}
        />
      ) : null}
      {content ? <figcaption className="mt-2">{content}</figcaption> : null}
      {soldOut ? (
        <span className="absolute text-5xl text-red-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 font-topSecret">
          VENDU!
        </span>
      ) : null}
    </figure>
  );
}

Polaroid.defaultProps = {
  image: undefined,
  content: undefined,
  tape: false,
  tilt: false,
  className: "",
  imageClassName: "",
  soldOut: false,
};

export default Polaroid;
