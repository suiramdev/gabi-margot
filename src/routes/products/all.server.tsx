import React, { Suspense } from "react";
import { HydrogenRouteProps, useShopQuery } from "@shopify/hydrogen";
import { RequestOptions } from "@shopify/hydrogen/utilities/apiRoutes";
import type { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import PRODUCTS_QUERY from "../../queries/Products";
import Layout from "../../components/layout/Layout.server";
import Breadcrumbs from "../../components/elements/Breadcrumbs";
import ProductGrid from "../../components/products/ProductGrid.client";

function ProductsRoute({ params }: HydrogenRouteProps) {
  const { handle } = params;

  const {
    data: { products },
  } = useShopQuery<QueryRoot>({
    query: PRODUCTS_QUERY,
    variables: {
      handle,
    },
  });

  return (
    <Layout>
      <section className="min-h-screen py-24 px-4 sm:px-16 md:px-32">
        <Suspense fallback={null}>
          <Breadcrumbs
            locations={[{ name: "Accueil", to: "/" }, { name: "Produits" }]}
          />
        </Suspense>
        <h1 className="mb-12">Nos produits</h1>
        <Suspense fallback={null}>
          <ProductGrid initialData={products} url="/products/all" />
        </Suspense>
      </section>
    </Layout>
  );
}

export async function api(request: Request, { queryShop }: RequestOptions) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  const url = new URL(request.url);
  const cursor = url.searchParams.get("cursor");

  const response = await queryShop<QueryRoot>({
    query: PRODUCTS_QUERY,
    variables: {
      endCursor: cursor,
    },
  });
  if (!response.data.products)
    return new Response("No products found", { status: 404 });
  return new Response(JSON.stringify(response.data.products), {
    headers: { "Content-Type": "application/json" },
  });
}

export default ProductsRoute;
