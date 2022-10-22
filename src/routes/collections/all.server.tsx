import React, { Suspense } from "react";
import { useShopQuery } from "@shopify/hydrogen";
import { RequestOptions } from "@shopify/hydrogen/utilities/apiRoutes";
import type { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import Layout from "../../components/Layout/Layout.server";
import NotFound from "../../components/NotFound.client";
import Breadcrumbs from "../../components/Breadcrumbs.client";
import COLLECTIONS_QUERY from "../../queries/Collections";
import CollectionGrid from "../../components/Collection/CollectionGrid.client";
import SkeletonText from "../../components/Skeleton/SkeletonText";
import SkeletonGrid from "../../components/Skeleton/SkeletonGrid";

function CollectionsRoute() {
  const {
    data: { collections },
  } = useShopQuery<QueryRoot>({
    query: COLLECTIONS_QUERY,
  });

  if (!collections) return <NotFound />;

  return (
    <Layout>
      <section className="min-h-screen py-24 px-4 sm:px-16 md:px-32">
        <Suspense fallback={<SkeletonText width={250} className="mb-8" />}>
          <Breadcrumbs
            locations={[{ name: "Accueil", to: "/" }, { name: "Collections" }]}
          />
        </Suspense>
        <h1 className="mb-12">Nos collections</h1>
        <Suspense fallback={<SkeletonGrid />}>
          <CollectionGrid initialData={collections} url="/collections/all" />
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
    query: COLLECTIONS_QUERY,
    variables: {
      endCursor: cursor,
    },
  });
  if (!response.data.collections)
    return new Response("No collections found", { status: 404 });
  return new Response(JSON.stringify(response.data.collections), {
    headers: { "Content-Type": "application/json" },
  });
}

export default CollectionsRoute;
