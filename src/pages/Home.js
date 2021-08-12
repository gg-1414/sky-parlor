import ProductList from '../components/ProductList';
import Cart from '../components/Cart/index';
import Header from '../components/Header';
import illustration1 from '../assets/illustration-1.png';
import illustration2 from '../assets/illustration-2.png';
import illustration3 from '../assets/illustration-3.png';
import styles from '../styles/pages/Home.module.scss'
import { ShopifyContext } from '../context/ShopifyContext';

export default function Home() {
  return (
    <ShopifyContext.Consumer>
      {({ 
        client,
        products, 
        checkout, 
        isCartOpen, 
        handleCartToggle, 
        updateQuantityInCart, 
        removeLineItemInCart 
      }) => {
        return (
          <>
            <Cart
              checkout={checkout}
              isCartOpen={isCartOpen}
              handleCartToggle={handleCartToggle}
              updateQuantityInCart={updateQuantityInCart}
              removeLineItemInCart={removeLineItemInCart}
            />
            <div className={`${styles.Home} p-4 md:p-8`}>
              <Header
                checkout={checkout}
                handleCartToggle={handleCartToggle}
              />
              <div className="illustrations relative grid grid-cols-3 gap-1">
                <img 
                  className={`${styles.illustration} object-contain w-full md:px-10 md:py-6`}
                  src={illustration1}
                  alt="Sky parlor illustration"
                />
                <img 
                  className={`${styles.illustration} object-contain w-full md:px-10 md:py-6`}
                  src={illustration2}
                  alt="Sky parlor illustration"
                />
                <img 
                  className={`${styles.illustration} object-contain w-full md:px-10 md:py-6 md:px-10`}
                  src={illustration3}
                  alt="Sky parlor illustration"
                />
              </div>
              <div className="shop_section relative flex-col items-center gap-10 p-8 pb-0 md:p-12 xl:p-14">
                <h2 className="text-4xl md:text-4xl text-left mt-4 md:mt-8 xl:mt-12 text-center">SHOP</h2>
                <ProductList products={products} />
              </div>
            </div>
          </>
        )
      }}
    </ShopifyContext.Consumer>
  );
};
