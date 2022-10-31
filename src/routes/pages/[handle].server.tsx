import React, { Suspense } from "react";
import { HydrogenRouteProps, useShopQuery } from "@shopify/hydrogen";
import Layout from "../../components/Layout/Layout.server";
import NotFound from "../../components/NotFound.client";
import SkeletonText from "../../components/Skeleton/SkeletonText";
import PageSeo from "../../components/Seo/PageSeo.server";
import PAGE_QUERY from "../../queries/Page";

function PolicyRoute({ params }: HydrogenRouteProps) {
  const { handle } = params;

  const {
    data: { page },
  } = useShopQuery({
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
        <Suspense fallback={<SkeletonText width={350} className="mb-8" />}>
          <h1>{page.title}</h1>
        </Suspense>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </section>
    </Layout>
  );
}

export default PolicyRoute;
