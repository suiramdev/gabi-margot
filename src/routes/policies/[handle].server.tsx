import React, { Suspense } from "react";
import {
    HydrogenRouteProps,
    useLocalization,
    useShopQuery,
} from "@shopify/hydrogen";
import NotFound from "../../components/layout/NotFound.client";
import POLICIES_QUERY from "../../queries/Policies";
import Layout from "../../components/layout/Layout.server";
import PageSeo from "../../components/seo/PageSeo.server";

function PolicyRoute({ params }: HydrogenRouteProps) {
    const {
        language: { isoCode: languageCode },
    } = useLocalization();
    const { handle } = params;

    const policy: Record<string, boolean> = {
        privacyPolicy: handle === "privacy-policy",
        refundPolicy: handle === "refund-policy",
        shippingPolicy: handle === "shipping-policy",
        termsOfService: handle === "terms-of-service",
    };

    if (
        !policy.privacyPolicy &&
        !policy.refundPolicy &&
        !policy.shippingPolicy &&
        !policy.termsOfService
    ) {
        return <NotFound />;
    }

    const activePolicy = Object.keys(policy).find((key) => policy[key])!;

    const {
        data: { shop },
    } = useShopQuery<any>({
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
            <PageSeo handle={handle} />
            <section className="mx-auto p-20 prose">
                {/* eslint-disable-next-line react/no-danger */}
                <div dangerouslySetInnerHTML={{ __html: page.body }} />
            </section>
        </Layout>
    );
}

export default PolicyRoute;
