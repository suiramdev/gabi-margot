import React, { Suspense } from "react";
import { HydrogenRouteProps, useShopQuery } from "@shopify/hydrogen";
import { RequestOptions } from "@shopify/hydrogen/utilities/apiRoutes";
import type { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import Layout from "../../components/Layout/Layout.server";
import COLLECTION_QUERY from "../../queries/Collection";
import NotFound from "../../components/NotFound.client";
import Breadcrumbs from "../../components/Breadcrumbs.client";
import ProductGrid from "../../components/Product/ProductGrid.client";
import SkeletonText from "../../components/Skeleton/SkeletonText";
import SkeletonGrid from "../../components/Skeleton/SkeletonGrid";

function CollectionRoute({ params }: HydrogenRouteProps) {
  const { handle } = params;

  const {
    data: { collection },
  } = useShopQuery<QueryRoot>({
    query: COLLECTION_QUERY,
    variables: {
      handle,
    },
  });

  if (!collection) return <NotFound />;

  return (
    <Layout>
      <section className="min-h-screen py-24 px-4 sm:px-16 md:px-32">
        <Suspense fallback={<SkeletonText width={250} className="mb-8" />}>
          <Breadcrumbs
            locations={[
              { name: "Accueil", to: "/" },
              { name: "Collections", to: "/collections/all" },
              { name: collection.title },
            ]}
          />
        </Suspense>
        <Suspense fallback={<SkeletonText width={350} className="mb-8" />}>
          <h1 className="mb-12">{collection.title}</h1>
        </Suspense>
        <Suspense fallback={<SkeletonGrid />}>
          <ProductGrid
            initialData={collection.products}
            url={`/collections/${handle}`}
          />
        </Suspense>
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

  const response = await queryShop<QueryRoot>({
    query: COLLECTION_QUERY,
    variables: {
      handle,
      endCursor: cursor,
    },
  });
  if (!response.data.collection)
    return new Response("Collection not found", { status: 404 });
  return new Response(JSON.stringify(response.data.collection.products), {
    headers: { "Content-Type": "application/json" },
  });
}

export default CollectionRoute;
