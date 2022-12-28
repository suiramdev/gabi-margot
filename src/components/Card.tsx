import React from "react";
import { Image } from "@shopify/hydrogen";
import clsx from "clsx";

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
                "w-[200px] aspect-square p-2 flex flex-col gap-1 bg-stone-200 shadow-lg",
                tape && [
                    "after:content-[''] after:absolute after:w-[75px] after:h-[30px] after:top-[-10px] after:bg-stone-200/80",
                    typeof tape !== "boolean" && tape.invert
                        ? "after:left-[5px] after:rotate-12"
                        : "after:right-[5px] after:-rotate-12",
                ],
                tilt && [
                    typeof tilt !== "boolean" && tilt.invert ? "-skew-y-2" : "skew-y-2",
                    typeof tilt !== "boolean" &&
                    tilt.hover &&
                    "hover:skew-y-0 hover:rotate-0 hover:scale-110 transition-all duration-200 hover:shadow-xl",
                ],
                className
            )}
        >
            {image ? (
                <Image
                    src={image}
                    width="100%"
                    height="100%"
                    alt="Polaroid"
                    className={clsx(
                        "w-full aspect-square object-cover pointer-events-none",
                        imageClassName
                    )}
                />
            ) : (
                <div
                    className={clsx(
                        "w-full aspect-square bg-black",
                        imageClassName
                    )}
                />
            )}
            {content ? <figcaption className="text-xs">{content}</figcaption> : null}
            {soldOut ? (
                <span className="absolute text-5xl text-red-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 font-topSecret">
                    VENDU!
                </span>
            ) : null}
        </figure>
    );
}

export default Card;
