import { defineConfig } from '@shopify/hydrogen/config';

export default defineConfig({
    shopify: {
        storeDomain: import.meta.env.PUBLIC_STOREFRONT_DOMAIN || "hydrogen-preview.myshopify.com",
        storefrontToken: import.meta.env.PUBLIC_STOREFRONT_TOKEN || "3b580e70970c4528da70c98e097c2fa0",
        storefrontApiVersion: import.meta.env.PUBLIC_STOREFRONT_API || "2022-07",
    },
});
