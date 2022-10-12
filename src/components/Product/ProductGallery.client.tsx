import React from "react";
import type { Image } from "@shopify/hydrogen/storefront-api-types";
import Polaroid from "../Polaroid";
import CardCarousel from "../Carousel/CardCarousel.client";

type Props = {
  images: Image[];
  soldOut?: boolean;
};

function ProductGallery({ images, soldOut }: Props) {
  return (
    <CardCarousel>
      {images.map((image) => (
        <Polaroid
          imageClassName="!w-full !h-full"
          image={image.url}
          key={image.id}
          soldOut={soldOut}
        />
      ))}
    </CardCarousel>
  );
}

ProductGallery.defaultProps = {
  soldOut: false,
};

export default ProductGallery;
