import React from "react";
import { Seo, useShopQuery } from "@shopify/hydrogen";
import { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import PRODUCT_SEO_QUERY from "../../queries/seo/ProductSeo";

type Props = {
    handle: string;
};

function ProductSeo({ handle }: Props) {
    const {
        data: { product },
    } = useShopQuery<QueryRoot>({
        query: PRODUCT_SEO_QUERY,
        preload: true,
        variables: {
            handle,
        },
    });

    if (!product) return null;

    return <Seo type="product" data={product} />;
}

export default ProductSeo;
