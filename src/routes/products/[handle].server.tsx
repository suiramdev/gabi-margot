import React, { Suspense } from "react";
import {
  HydrogenRouteProps,
  ProductOptionsProvider,
  useShopQuery,
} from "@shopify/hydrogen";
import type { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import Layout from "../../components/Layout/Layout.server";
import NotFound from "../../components/NotFound.client";
import PRODUCT_QUERY from "../../queries/Product";
import Breadcrumbs from "../../components/Breadcrumbs.client";
import ProductDetails from "../../components/Product/ProductDetails.client";
import SkeletonText from "../../components/Skeleton/SkeletonText";

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
      <section className="min-h-screen py-24 px-4 sm:px-16 md:px-32">
        <Suspense fallback={<SkeletonText width={250} className="mb-8" />}>
          <Breadcrumbs
            locations={[
              { name: "Accueil", to: "/" },
              { name: "Produits", to: "/products/all" },
              { name: product.title },
            ]}
          />
        </Suspense>
        <ProductOptionsProvider data={product}>
          <ProductDetails product={product} />
        </ProductOptionsProvider>
      </section>
      <section className="bg-default-100">
        <h2 className="py-8 text-center">Nos Recommandations</h2>
      </section>
    </Layout>
  );
}

export default ProductRoute;
