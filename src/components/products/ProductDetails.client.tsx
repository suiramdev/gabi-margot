import React from "react";
import {
    AddToCartButton,
    BuyNowButton,
    ProductPrice,
    useProductOptions,
} from "@shopify/hydrogen";
import type { Product } from "@shopify/hydrogen/storefront-api-types";
import ProductGallery from "./ProductGallery.client";
import { CartContext } from "../../providers/CartProvider.client";

type Props = {
    product: Product;
};

function ProductDetails({ product }: Props) {
    const { selectedVariant } = useProductOptions();
    const isOutOfStock = !selectedVariant?.availableForSale || false;
    const [_, setCartShow] = React.useContext(CartContext);

    return (
        <div className="grid lg:grid-cols-2 gap-5">
            <ProductGallery images={product.images.nodes} soldOut={isOutOfStock} />
            <div className="flex flex-col justify-center gap-5">
                <div>
                    <h1>{product.title}</h1>
                    <div className="flex items-center gap-2">
                        <ProductPrice
                            className="text-2xl text-orange-500 font-bold"
                            variantId={selectedVariant?.id}
                            data={product}
                        />
                        <ProductPrice
                            className="text-lg line-through text-stone-500"
                            priceType="compareAt"
                            variantId={selectedVariant?.id}
                            data={product}
                        />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-1.5">
                    <BuyNowButton
                        className="btn btn-primary"
                        variantId={selectedVariant?.id || ""}
                        quantity={1}
                        disabled={isOutOfStock}
                    >
                        Acheter maintenant
                    </BuyNowButton>
                    <AddToCartButton
                        className="btn btn-secondary"
                        variantId={selectedVariant?.id}
                        quantity={1}
                        disabled={isOutOfStock}
                        onClick={() => setCartShow(true)}
                    >
                        Ajouter au panier
                    </AddToCartButton>
                </div>
                <p className="font-light">{product.description}</p>
            </div>
        </div>
    );
}

export default ProductDetails;
