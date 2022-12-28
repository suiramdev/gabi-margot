import React, { Suspense } from "react";
import {
    HydrogenRouteProps,
    ProductOptionsProvider,
    useShopQuery,
} from "@shopify/hydrogen";
import type { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import PRODUCT_QUERY from "../../queries/Product";
import NotFound from "../../components/layout/NotFound.client";
import Layout from "../../components/layout/Layout.server";
import ProductSeo from "../../components/seo/ProductSeo.server";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductDetails from "../../components/products/ProductDetails.client";
import FeaturedProducts from "../../components/sections/FeaturedProducts.server";

function ProductRoute({ params }: HydrogenRouteProps) {
    const { handle } = params;

    const {
        data: { product },
    } = useShopQuery<QueryRoot>({
        query: PRODUCT_QUERY,
        variables: {
            handle,
        },
    });

    if (!product) return <NotFound />;

    return (
        <Layout>
            <ProductSeo handle={handle} />
            <section className="bg-stone-100">
                <Suspense fallback={null}>
                    <Breadcrumbs
                        locations={[
                            { name: "Accueil", to: "/" },
                            { name: "Produits", to: "/products" },
                            { name: product.title },
                        ]}
                    />
                </Suspense>
                <ProductOptionsProvider data={product}>
                    <ProductDetails product={product} />
                </ProductOptionsProvider>
            </section>
            <FeaturedProducts />
        </Layout>
    );
}

export default ProductRoute;
