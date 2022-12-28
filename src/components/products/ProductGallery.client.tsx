import React from "react";
import type { Image } from "@shopify/hydrogen/storefront-api-types";
import { motion } from "framer-motion";
import clsx from "clsx";
import { move } from "../../utils/array";
import Card from "../Card";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

type Props = {
    images: Image[];
    soldOut?: boolean;
};

function ProductGallery({ images, soldOut }: Props) {
    const [imagesLoaded, setImagesLoaded] = React.useState<Image[]>(images);
    const moveToEnd = (index: number) => {
        setImagesLoaded(move(imagesLoaded, index, imagesLoaded.length - 1));
    };

    // This is somehow fixing the dragConstraint issue
    // The dragConstraint is not working on re-render, excepted using a ref
    const dragRef = React.useRef<HTMLUListElement>(null);

    return (
        <div className="w-full flex justify-center items-center aspect-square">
            {imagesLoaded.length > 1 ? (
                <>
                    <button
                        type="button"
                        className="text-stone-400 hover:text-stone-500"
                        onClick={() => moveToEnd(0)}
                    >
                        <ChevronLeftIcon size={48} />
                    </button>
                    <ul className="relative flex-1 aspect-square" ref={dragRef}>
                        {imagesLoaded.map((image, index) => {
                            const canDrag = index === 0;

                            return (
                                <motion.li
                                    key={image.id}
                                    className={clsx(
                                        "absolute w-full h-full",
                                        canDrag ? "cursor-grab" : "cursor-default"
                                    )}
                                    animate={{
                                        left: 0,
                                        scale: 1 - index * 0.09,
                                        zIndex: images.length - index,
                                    }}
                                    drag={canDrag ? "x" : false}
                                    dragConstraints={dragRef}
                                    onDragEnd={() => moveToEnd(index)}
                                >
                                    <Card
                                        className="!w-full"
                                        image={image.url}
                                        soldOut={soldOut}
                                    />
                                </motion.li>
                            );
                        })}
                    </ul>
                    <button
                        type="button"
                        className="text-stone-400 hover:text-stone-500"
                        onClick={() => moveToEnd(0)}
                    >
                        <ChevronRightIcon size={48} />
                    </button>
                </>
            ) : (
                <Card
                    className="w-[80%] aspect-square"
                    imageClassName="!w-full !h-full"
                />
            )}
        </div>
    );
}

export default ProductGallery;
