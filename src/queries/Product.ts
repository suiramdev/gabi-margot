import { gql } from "@shopify/hydrogen";

const PRODUCT_QUERY = gql`
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      availableForSale
      description
      images(first: 5) {
        nodes {
          id
          url
        }
      }
      variants(first: 100) {
        nodes {
          id
          availableForSale
          compareAtPriceV2 {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
          priceV2 {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export default PRODUCT_QUERY;
