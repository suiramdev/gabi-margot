import React from "react";
import {
  HydrogenRouteProps,
  ProductOptionsProvider,
  useShopQuery,
} from "@shopify/hydrogen";
import Layout from "../../components/Layout/Layout.server";
import NotFound from "../../components/NotFound.server";
import PRODUCT_QUERY from "../../queries/Product";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductDetails from "../../components/Product/ProductDetails.client";

function Policy({ params }: HydrogenRouteProps) {
  const { handle } = params;

  const {
    data: { product },
  } = useShopQuery({
    query: PRODUCT_QUERY,
    variables: {
      handle,
    },
  });

  if (!product) return <NotFound />;

  return (
    <Layout>
      <section className="min-h-screen py-24 px-4 sm:px-16 md:px-32">
        <Breadcrumbs
          locations={[{ name: "Accueil", to: "/" }, { name: product.title }]}
        />
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

export default Policy;
