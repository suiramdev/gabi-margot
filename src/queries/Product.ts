import { gql } from "@shopify/hydrogen";

const PRODUCT_QUERY = gql`
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      availableForSale
      description
      images(first: 5) {
        edges {
          node {
            id
            url
          }
        }
      }
    }
  }
`;

export default PRODUCT_QUERY;