import React, { Suspense } from "react";
import { HydrogenRouteProps, useShopQuery } from "@shopify/hydrogen";
import { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import PAGE_QUERY from "../../queries/Page";
import NotFound from "../../components/layout/NotFound.client";
import Layout from "../../components/layout/Layout.server";
import PageSeo from "../../components/seo/PageSeo.server";

function PolicyRoute({ params }: HydrogenRouteProps) {
  const { handle } = params;

  const {
    data: { page },
  } = useShopQuery<QueryRoot>({
    query: PAGE_QUERY,
    variables: {
      handle,
    },
  });

  if (!page) {
    return <NotFound />;
  }

  return (
    <Layout>
      <PageSeo handle={handle} />
      <section className="mx-auto p-20 prose">
        <Suspense fallback={null}>
          <h1>{page.title}</h1>
        </Suspense>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </section>
    </Layout>
  );
}

export default PolicyRoute;
