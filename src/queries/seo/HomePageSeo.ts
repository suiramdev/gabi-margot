import { gql } from "@shopify/hydrogen";

const HOMEPAGE_SEO_QUERY = gql`
  query DefaultSeo {
    shop {
      name
      description
    }
  }
`;

export default HOMEPAGE_SEO_QUERY;
