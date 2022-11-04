import React from "react";
import {
  AddToCartButton,
  BuyNowButton,
  ProductPrice,
  useProductOptions,
} from "@shopify/hydrogen";
import type { Product } from "@shopify/hydrogen/storefront-api-types";
import { CartContext } from "../../providers/CartProvider.client";
import ProductGallery from "./ProductGallery.client";
import { LockIcon } from "../elements/Icon";

type Props = {
  product: Product;
};

function ProductDetails({ product }: Props) {
  const { selectedVariant } = useProductOptions();
  const isOutOfStock = !selectedVariant?.availableForSale || false;

  const [, showCart] = React.useContext(CartContext);

  return (
    <div className="grid lg:grid-cols-[45%_100%] gap-12">
      <ProductGallery images={product.images.nodes} soldOut={isOutOfStock} />
      <div className="flex flex-col justify-center gap-8">
        <div>
          <h1 className="mb-2">{product.title}</h1>
          <div className="flex items-center gap-4">
            <ProductPrice
              className="text-2xl text-primary font-bold"
              variantId={selectedVariant?.id}
              data={product}
            />
            <ProductPrice
              className="text-lg line-through text-gray-400"
              priceType="compareAt"
              variantId={selectedVariant?.id}
              data={product}
            />
          </div>
        </div>
        <p className="mb-8 prose">{product.description}</p>
        <div>
          <div className="mb-4 flex gap-4">
            <BuyNowButton
              className="btn"
              variantId={selectedVariant?.id || ""}
              quantity={1}
              disabled={isOutOfStock}
            >
              Acheter maintenant
            </BuyNowButton>
            <AddToCartButton
              className="btn btn-outline"
              variantId={selectedVariant?.id}
              quantity={1}
              disabled={isOutOfStock}
              onClick={() => showCart(true)}
            >
              Ajouter au panier
            </AddToCartButton>
          </div>
          <span className="flex items-center gap-2 text-secondary">
            <LockIcon />
            Payement sécurisé
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
