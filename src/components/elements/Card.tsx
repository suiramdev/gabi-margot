import React from "react";
import clsx from "clsx";
import { Image } from "@shopify/hydrogen";
import { FrameIcon } from "./Icon";

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

function Card({
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
          "after:content-[''] after:absolute after:w-[75px] after:h-[30px] after:top-[-10px] after:bg-[#DEDCC6]/80",
          typeof tape !== "boolean" && tape.invert
            ? "after:left-[5px] after:rotate-12"
            : "after:right-[5px] after:-rotate-12",
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
            "h-[175px] lg:h-[280px] aspect-square object-cover pointer-events-none",
            imageClassName
          )}
        />
      ) : (
        <div
          className={clsx(
            "relative h-[175px] lg:h-[280px] aspect-square bg-gray-200",
            imageClassName
          )}
        >
          <FrameIcon
            size="lg"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-gray-300"
          />
        </div>
      )}
      {content ? <figcaption className="mt-2">{content}</figcaption> : null}
      {soldOut ? (
        <span className="absolute text-5xl text-red-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 font-topSecret">
          VENDU!
        </span>
      ) : null}
    </figure>
  );
}

export default Card;
