import React, { Suspense } from "react";
import { HydrogenRouteProps, useShopQuery } from "@shopify/hydrogen";
import { RequestOptions } from "@shopify/hydrogen/utilities/apiRoutes";
import Layout from "../../components/Layout/Layout.server";
import COLLECTION_QUERY from "../../queries/Collection";
import NotFound from "../../components/NotFound.server";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductGrid from "../../components/Product/ProductGrid.client";
import COLLECTIONS_QUERY from "../../queries/Collections";

function Collection({ params }: HydrogenRouteProps) {
  const { handle } = params;

  const {
    data: { collection },
  } = useShopQuery({
    query: COLLECTION_QUERY,
    variables: {
      handle,
    },
  });

  if (!collection) return <NotFound />;

  return (
    <Layout>
      <section className="min-h-screen py-24 px-4 sm:px-16 md:px-32">
        <Suspense fallback={null}>
          <Breadcrumbs
            locations={[
              { name: "Accueil", to: "/" },
              { name: collection.title },
            ]}
          />
        </Suspense>
        <Suspense fallback={null}>
          <h1 className="mb-12">{collection.title}</h1>
        </Suspense>
        <ProductGrid collection={collection} url={`/collections/${handle}`} />
      </section>
    </Layout>
  );
}

export async function api(
  request: Request,
  { params, queryShop }: RequestOptions
) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: { Allow: "POST" },
    });
  }

  const { handle } = params;
  const url = new URL(request.url);
  const cursor = url.searchParams.get("cursor");

  return queryShop({
    query: COLLECTIONS_QUERY,
    variables: {
      handle,
      endCursor: cursor,
    },
  });
}

export default Collection;
