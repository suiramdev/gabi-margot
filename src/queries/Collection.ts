import { gql } from "@shopify/hydrogen";

const COLLECTION_QUERY = gql`
  query collection($handle: String!, $first: Int = 30, $endCursor: String) {
    collection(handle: $handle) {
      id
      title
      products(first: $first, after: $endCursor) {
        nodes {
          id
          handle
          title
          availableForSale
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export default COLLECTION_QUERY;
