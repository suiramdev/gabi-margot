import { defineConfig } from "@shopify/hydrogen/config";

export default defineConfig({
  shopify: {
    storeDomain: "gabi-margot.myshopify.com",
    storefrontToken: "dc1b4d3fbb5a32564c47fda6be93d01f",
    storefrontApiVersion: "2022-07",
  },
  logger: {
    showQueryTiming: true,
  },
});
