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
};

function Polaroid({ tape, tilt, image, content, className }: Props) {
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
          typeof tilt !== "boolean" && tilt.invert ? "rotate-6" : "-rotate-6",
          typeof tilt !== "boolean" &&
            tilt.hover && [
              "scale-90 hover:scale-100 transition-all duration-200 hover:drop-shadow-xl",
              tilt.invert ? "hover:rotate-1" : "hover:-rotate-1",
            ],
        ],
        className
      )}
    >
      {image ? (
        <Image src={image} width="100%" height="100%" alt="Polaroid" />
      ) : null}
      {content ? <figcaption className="mt-2">{content}</figcaption> : null}
    </figure>
  );
}

Polaroid.defaultProps = {
  image: undefined,
  content: undefined,
  tape: false,
  tilt: false,
  className: "",
};

export default Polaroid;
