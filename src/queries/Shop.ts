import { gql } from "@shopify/hydrogen";

const SHOP_QUERY = gql`
  query Shop {
    shop {
      name
      description
    }
  }
`;

export default SHOP_QUERY;
