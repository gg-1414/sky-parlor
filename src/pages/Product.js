import { useEffect, useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { ShopifyContext } from '../context/ShopifyContext';
import Header from '../components/Header';
import ProductDetails from '../components/Product/ProductDetails';
import Cart from '../components/Cart/index';
import styles from '../styles/pages/Product.module.scss';

const RenderComponent = ({
  client,
  checkout,
  isCartOpen,
  fetchProduct,
  handleCartToggle,
  updateQuantityInCart,
  removeLineItemInCart,
  addVariantToCart,
}) => {
  const [product, setProduct] = useState({});

  const location = useLocation();
  const path = location.pathname;
  const productId = path.slice('/product/'.length);

  useEffect(() => {
    async function getProduct() {
      try {
        const product = await fetchProduct(productId);
        setProduct(product);
      } catch (err) {
        setProduct({});
        console.error('Error getting product: ', err);
        return;
      }
    }
    getProduct();
  }, [productId, fetchProduct]);

  if (!product) return <Redirect to="/" />;

  else if (Object.keys(product).length) {
    return (
      <div className="product">
        <Cart
          checkout={checkout}
          isCartOpen={isCartOpen}
          handleCartToggle={handleCartToggle}
          updateQuantityInCart={updateQuantityInCart}
          removeLineItemInCart={removeLineItemInCart}
        />
        <div className={`${styles.Product} p-4 md:p-8`}>
          <Header
            checkout={checkout}
            handleCartToggle={handleCartToggle}
          />
          <ProductDetails
            client={client}
            product={product}
            addVariantToCart={addVariantToCart}
          />
        </div>
      </div>
    )
  }
  
  else return <div />;
}

export default function Product() {
  return (
    <ShopifyContext.Consumer>
      {({
        client,
        checkout,
        isCartOpen,
        fetchProduct,
        handleCartToggle,
        updateQuantityInCart,
        removeLineItemInCart,
        addVariantToCart,
      }) => {
        if (!client) return <div />;

        return (
          <RenderComponent 
            client={client}
            checkout={checkout}
            isCartOpen={isCartOpen}
            fetchProduct={fetchProduct}
            handleCartToggle={handleCartToggle}
            updateQuantityInCart={updateQuantityInCart}
            removeLineItemInCart={removeLineItemInCart}
            addVariantToCart={addVariantToCart}
          />
        )
      }}
    </ShopifyContext.Consumer>
  );
};
