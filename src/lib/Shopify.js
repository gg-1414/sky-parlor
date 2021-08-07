import Client from 'shopify-buy';

// Initializing a client to return content in the store's primary language
const shopifyClient = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN
});

export default shopifyClient;
