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
  soldOut?: boolean;
};

function Polaroid({ tape, tilt, image, content, className, soldOut }: Props) {
  return (
    <figure
      className={clsx(
        "relative w-[200px] h-fit px-[8px] py-[10px] bg-[#eee6d8] drop-shadow-md",
        tape && [
          "before:content-[''] before:absolute before:w-[75px] before:h-[30px] before:top-[-10px] before:bg-[#DEDCC6]/80 before:-rotate-12",
          typeof tape !== "boolean" && tape.invert
            ? "before:left-[5px] before:rotate-12"
            : "before:right-[5px] before:-rotate-12",
        ],
        tilt && [
          typeof tilt !== "boolean" && tilt.invert ? "rotate-2" : "-rotate-2",
          typeof tilt !== "boolean" &&
            tilt.hover &&
            "hover:rotate-0 hover:scale-110 transition-all duration-200 hover:drop-shadow-xl",
        ],
        className
      )}
    >
      {image ? (
        <Image src={image} width="100%" height="100%" alt="Polaroid" />
      ) : null}
      {content ? <figcaption className="mt-2">{content}</figcaption> : null}
      {soldOut ? (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 font-topSecret text-red-500 text-5xl">
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
  soldOut: false,
};

export default Polaroid;
