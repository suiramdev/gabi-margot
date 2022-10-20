import React from "react";
import { useShopQuery } from "@shopify/hydrogen";
import { RequestOptions } from "@shopify/hydrogen/utilities/apiRoutes";
import Layout from "../../components/Layout/Layout.server";
import NotFound from "../../components/NotFound.server";
import Breadcrumbs from "../../components/Breadcrumbs";
import COLLECTIONS_QUERY from "../../queries/Collections";
import CollectionGrid from "../../components/Collection/CollectionGrid.client";

function Collection() {
  const {
    data: { collections },
  } = useShopQuery({
    query: COLLECTIONS_QUERY,
  });

  if (!collections) return <NotFound />;

  return (
    <Layout>
      <section className="min-h-screen py-24 px-4 sm:px-16 md:px-32">
        <Breadcrumbs
          locations={[{ name: "Accueil", to: "/" }, { name: "Collections" }]}
        />
        <h1 className="mb-12">Nos collections</h1>
        <CollectionGrid
          collectionConnection={collections}
          url="/collections/all"
        />
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

  return queryShop({
    query: COLLECTIONS_QUERY,
    variables: {
      endCursor: cursor,
    },
  });
}

export default Collection;
