import { gql } from "@shopify/hydrogen";

const PRODUCT_SEO_QUERY = gql`
  query ProductSeo($handle: String!) {
    product(handle: $handle) {
      title
      seo {
        title
        description
      }
    }
  }
`;

export default PRODUCT_SEO_QUERY;
