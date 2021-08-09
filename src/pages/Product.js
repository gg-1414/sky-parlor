import { Redirect } from 'react-router-dom';
import { ShopifyContext } from '../context/ShopifyContext';
import Header from '../components/Header';
import ProductDetails from '../components/Product/ProductDetails';
import Cart from '../components/Cart/index';
import styles from '../styles/pages/Product.module.scss';

export default function Product() {
  return (
    <ShopifyContext.Consumer>
      {({
        client,
        checkout,
        isCartOpen,
        handleCartToggle,
        updateQuantityInCart,
        removeLineItemInCart,
        addVariantToCart,
      }) => {
        const localStorageProduct = localStorage.getItem('sp_shopify_product');
        const product = localStorageProduct ? JSON.parse(localStorageProduct) : null;

        if (!product) return <Redirect to="/" />
        return (
          <>
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
          </>
        )
      }}
    </ShopifyContext.Consumer>
  );
};
