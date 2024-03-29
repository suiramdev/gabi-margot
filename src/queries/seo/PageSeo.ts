import { gql } from "@shopify/hydrogen";

const PAGE_SEO_QUERY = gql`
  query PageSeo($handle: String!) {
    page(handle: $handle) {
      title
      seo {
        title
        description
      }
    }
  }
`;

export default PAGE_SEO_QUERY;
