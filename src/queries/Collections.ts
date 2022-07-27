import { gql } from "@shopify/hydrogen";

const COLLECTIONS_QUERY = gql`
  query CollectionsQuery {
    collections(first: 5) {
      nodes {
        id
        title
        handle
        image {
          url
        }
      }
    }
  }
`;

export default COLLECTIONS_QUERY;
