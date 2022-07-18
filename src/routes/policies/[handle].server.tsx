import React from "react";
import {
  gql,
  HydrogenRouteProps,
  useLocalization,
  useShopQuery,
} from "@shopify/hydrogen";
import Layout from "../../components/Layout/Layout.server";
import NotFound from "../../components/NotFound.server";

function Policy({ params }: HydrogenRouteProps) {
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
        <h1>{page.title}</h1>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: page.body }} />
      </section>
    </Layout>
  );
}

const POLICIES_QUERY = gql`
  fragment Policy on ShopPolicy {
    body
    handle
    id
    title
    url
  }

  query PoliciesQuery(
    $languageCode: LanguageCode
    $privacyPolicy: Boolean!
    $shippingPolicy: Boolean!
    $termsOfService: Boolean!
    $refundPolicy: Boolean!
  ) @inContext(language: $languageCode) {
    shop {
      privacyPolicy @include(if: $privacyPolicy) {
        ...Policy
      }
      shippingPolicy @include(if: $shippingPolicy) {
        ...Policy
      }
      termsOfService @include(if: $termsOfService) {
        ...Policy
      }
      refundPolicy @include(if: $refundPolicy) {
        ...Policy
      }
    }
  }
`;

export default Policy;
