import React, { Suspense } from "react";
import {
  HydrogenRouteProps,
  useLocalization,
  useShopQuery,
} from "@shopify/hydrogen";
import Layout from "../../components/Layout/Layout.server";
import NotFound from "../../components/NotFound.client";
import POLICIES_QUERY from "../../queries/Policies";
import SkeletonText from "../../components/Skeleton/SkeletonText";

function PolicyRoute({ params }: HydrogenRouteProps) {
  const {
    language: { isoCode: languageCode },
  } = useLocalization();
  const { handle } = params;

  const policy: Record<string, boolean> = {
    privacyPolicy: handle === "privacy-policy",
    shippingPolicy: handle === "shipping-policy",
    termsOfService: handle === "terms-of-service",
    refundPolicy: handle === "refund-policy",
  };

  if (
    !policy.privacyPolicy &&
    !policy.shippingPolicy &&
    !policy.termsOfService &&
    !policy.refundPolicy
  ) {
    return <NotFound />;
  }

  const activePolicy = Object.keys(policy).find((key) => policy[key])!;

  const {
    data: { shop },
  } = useShopQuery({
    query: POLICIES_QUERY,
    variables: {
      languageCode,
      ...policy,
    },
  });

  const page = shop?.[activePolicy];

  // If the policy page is empty, return not found
  if (!page) {
    return <NotFound />;
  }

  return (
    <Layout>
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
