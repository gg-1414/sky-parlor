import React, { useEffect, useState } from 'react';
import shopifyClient from '../lib/Shopify';

const baseState = {
  client: null,
  products: [],
  checkout: { lineItems: [] },
  isCartOpen: false,
  handleCartToggle: () => {},
  fetchProduct: async () => {},
  updateQuantityInCart: async () => {},
  removeLineItemInCart: async () => {},
  addVariantToCart: async () => {},
}

const Shopify = () => {
  const [client, setClient] = useState(null);
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const bodyClickHandler = () => {
    setIsCartOpen(false);
  }

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);

    if (isCartOpen) {
      document.body.addEventListener("click", bodyClickHandler);
    } else {
      document.body.removeEventListener("click", bodyClickHandler);
    }
  }

  async function fetchProduct(productId) {
    if (!client) return;
    try {
      const product = await client.product.fetch(productId);
      return product;
    } catch (err) {
      console.error('Error fetching product: ', err);
    }
  }

  async function updateQuantityInCart(lineItemId, quantity) {
    if (!client) return;
    const checkoutId = checkout.id;
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}];

    try {
      const checkout = await client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);
      setCheckout(checkout);
    } catch (err) {
      console.error('Error updating line items: ', err);
    }
  }

  async function removeLineItemInCart(lineItemId) {
    if (!client) return;
    const checkoutId = checkout.id;
    try {
      const checkout = await client.checkout.removeLineItems(checkoutId, [lineItemId]);
      setCheckout(checkout);
    } catch (err) {
      console.error('Error removing line item: ', err);
    }
  }

  async function addVariantToCart(variantId, quantity) {
    if (!client || !checkout) return;
    setIsCartOpen(true);

    try {
      const lineItems = [{variantId, quantity: parseInt(quantity, 10)}];
      const checkoutId = localStorage.getItem('sp_shopify_checkoutId');
      const checkout = await client.checkout.addLineItems(checkoutId, lineItems)
      setCheckout(checkout);
    } catch (err) {
      console.error('Error adding line item: ', err);
    }
  }

  useEffect(() => {
    setClient(shopifyClient);
  }, [])

  useEffect(() => {
    async function fetchProducts() {
      if (!client) return;
      try {
        const products = await client.product.fetchAll();
        setProducts(products);
      } catch (err) {
        console.error('Error fetching products: ', err);
      }
    }

    async function createCheckout() {
      if (!client) return;
      try {
        const checkout = await client.checkout.create();
        localStorage.setItem('sp_shopify_checkoutId', checkout.id);
      } catch (err) {
        console.error('Error creating checkout: ', err);
      }
    }

    async function fetchCheckout() {
      if (!client) return;
      try {
        const checkoutId = localStorage.getItem('sp_shopify_checkoutId');
        const checkout = client.checkout.fetch(checkoutId);
        setCheckout(checkout);
      } catch (err) {
        console.error('Error fetching checkout: ', err);
      }
    }
    
    fetchProducts();
    createCheckout();
    fetchCheckout();
  }, [client])

  return {
    client,
    products,
    checkout,
    isCartOpen,
    handleCartToggle,
    fetchProduct,
    updateQuantityInCart,
    removeLineItemInCart,
    addVariantToCart,
  }
}

export const ShopifyContext = React.createContext(baseState);

export function ShopifyProvider({ children }) {
  return (
    <ShopifyContext.Provider value={Shopify()}>
      {children}
    </ShopifyContext.Provider>
  )
}
