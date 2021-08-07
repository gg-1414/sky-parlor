import React, { useEffect, useState } from 'react';
import shopifyClient from '../lib/Shopify';

const baseState = {
  client: null,
  products: [],
  checkout: { lineItems: [] },
  isCartOpen: false,
  handleCartToggle: () => {},
  updateQuantityInCart: async () => {},
  removeLineItemInCart: async () => {},
}

const Shopify = () => {
  const [client, setClient] = useState(null);
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartToggle = () => {
    console.log('handleCartToggle!')
    setIsCartOpen(!isCartOpen);
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
        setCheckout(checkout)
      } catch (err) {
        console.log('Error creating checkout: ', err);
      }
    }

    fetchProducts();
    createCheckout();
  }, [client])

  return {
    client,
    products,
    checkout,
    isCartOpen,
    handleCartToggle,
    updateQuantityInCart,
    removeLineItemInCart,
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
