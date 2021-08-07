import React, { useEffect, useState } from 'react';
import shopifyClient from '../lib/Shopify';

const baseState = {
  client: null,
  products: [],
  // isCartOpen: false,
  // checkout: { lineItems: [] },
}

// class Shopify extends React.component {
//   constructor() {
//     super();

//     this.state = baseState;
//   }

//   componentDidMount()
// }

const Shopify = () => {
  const [client, setClient] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setClient(shopifyClient);
  }, [])

  useEffect(() => {
    async function fetchProducts() {
      if (!client) return;

      const products = await client.product.fetchAll();
      setProducts(products)
      return products;
    }

    fetchProducts()
  }, [client])

  useEffect(() => {
    console.log('products in useEffect3', products)
  }, [products])

  return {
    client,
    products,
  }
}

export const ShopifyContext = React.createContext(baseState)

export function ShopifyProvider({ children }) {
  return (
    <ShopifyContext.Provider value={Shopify()}>
      {children}
    </ShopifyContext.Provider>
  )
}
