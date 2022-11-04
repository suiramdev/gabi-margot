import React from "react";
import type { Image } from "@shopify/hydrogen/storefront-api-types";
import Card from "../elements/Card";
import CardCarousel from "../elements/CardCarousel.client";

type Props = {
  images: Image[];
  soldOut?: boolean;
};

function ProductGallery({ images, soldOut }: Props) {
  return (
    <CardCarousel>
      {images.map((image) => (
        <Card
          imageClassName="!w-full !h-full"
          image={image.url}
          key={image.id}
          soldOut={soldOut}
        />
      ))}
    </CardCarousel>
  );
}

export default ProductGallery;
