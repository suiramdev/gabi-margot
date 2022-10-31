import { gql } from "@shopify/hydrogen";

const PAGE_QUERY = gql`
  query Page($handle: String!) {
    page(handle: $handle) {
      title
      body
    }
  }
`;

export default PAGE_QUERY;
