import React from "react";
import { Seo, useShopQuery } from "@shopify/hydrogen";
import { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import HOMEPAGE_SEO_QUERY from "../../queries/seo/HomePageSeo";

function HomePageSeo() {
  const {
    data: { shop },
  } = useShopQuery<QueryRoot>({
    query: HOMEPAGE_SEO_QUERY,
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title: shop.name,
        description: shop.description,
      }}
    />
  );
}

export default HomePageSeo;
