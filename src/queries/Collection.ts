import { gql } from "@shopify/hydrogen";

const COLLECTION_QUERY = gql`
  query Collection($handle: String!) {
    collection(handle: $handle) {
      id
      title
      products(first: 10) {
        edges {
          node {
            id
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
        }
      }
    }
  }
`;

export default COLLECTION_QUERY;