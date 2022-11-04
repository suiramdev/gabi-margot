import React from "react";
import { Seo, useShopQuery } from "@shopify/hydrogen";
import { QueryRoot } from "@shopify/hydrogen/storefront-api-types";
import PAGE_SEO_QUERY from "../../queries/seo/PageSeo";

type Props = {
  handle: string;
};

function PageSeo({ handle }: Props) {
  const {
    data: { page },
  } = useShopQuery<QueryRoot>({
    query: PAGE_SEO_QUERY,
    preload: true,
    variables: {
      handle,
    },
  });

  if (!page) return null;

  return <Seo type="page" data={page} />;
}

export default PageSeo;
