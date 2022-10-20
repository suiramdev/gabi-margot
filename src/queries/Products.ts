import { gql } from "@shopify/hydrogen";

const PRODUCTS_QUERY = gql`
  query Products($first: Int = 20, $endCursor: String) {
    products(first: $first, after: $endCursor) {
      nodes {
        id
        handle
        title
        availableForSale
        images(first: 1) {
          nodes {
            url
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export default PRODUCTS_QUERY;
