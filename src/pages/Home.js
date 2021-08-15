import ProductList from '../components/ProductList';
import Cart from '../components/Cart/index';
import Header from '../components/Header';
import Image from '../components/Image';
import styles from '../styles/pages/Home.module.scss';
import { ShopifyContext } from '../context/ShopifyContext';

export default function Home() {
  return (
    <ShopifyContext.Consumer>
      {({
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
              <div 
                className="illustrations relative grid grid-cols-3 gap-1" 
                style={{maxHeight: "calc((100vw / 3) * 1.4)"}}
              >
                <div className={`${styles.illustration}`}>
                  <Image path={"illustration-1.png"} alt={"illustration of clothing"} />
                </div>
                <div className={`${styles.illustration}`}>
                  <Image path={"illustration-2.png"} alt={"illustration of clothing"} />
                </div>
                <div className={`${styles.illustration}`}>
                  <Image path={"illustration-3.png"} alt={"illustration of clothing"} />
                </div>
              </div>
              <div className="shop_section relative flex-col items-center gap-10 px-8 pt-12 pb-0 md:p-12 xl:p-14">
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
