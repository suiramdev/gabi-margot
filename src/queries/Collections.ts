import { gql } from "@shopify/hydrogen";

const COLLECTIONS_QUERY = gql`
  query CollectionsQuery($first: Int = 30, $endCursor: String) {
    collections(first: $first, after: $endCursor) {
      nodes {
        id
        title
        handle
        image {
          url
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export default COLLECTIONS_QUERY;
