import ProductList from '../components/ProductList';
import Cart from '../components/Cart/index';
import logoGif from '../assets/logo.gif';
import illustration1 from '../assets/illustration-1.png';
import illustration2 from '../assets/illustration-2.png';
import illustration3 from '../assets/illustration-3.png';
import styles from '../styles/pages/Home.module.scss'
import { ShopifyContext } from '../context/ShopifyContext';
import Cube from '../components/Cube';

const Logo = () => {
  return (
    <img 
      className={`${styles.logo} m-auto fixed -right-1 md:right-6 top-1 md:top-0 z-10`}
      src={logoGif} 
      alt="sky parlor spinning logo"
    />
  );
};

export default function Home() {
  return (
    <ShopifyContext.Consumer>
      {({ products, checkout, isCartOpen, handleCartToggle, updateQuantityInCart, removeLineItemInCart }) => {
        if (!products || !checkout) return (
          <div className={`${styles.Home} p-4 md:p-8`}>
            {/* <div className={`${styles.behind_logo_circle} ${styles.yellow}`}/> */}
            {/* <div className={`${styles.behind_logo_circle} ${styles.blue}`}/> */}
            <Logo />
            <img 
              className={`${styles.illustration} max-w-md absolute`}
              src={illustration1}
              alt="Sky parlor illustration"
            />
            <img 
              className={`${styles.illustration} max-w-md absolute bottom-10 right-0`}
              src={illustration2}
              alt="Sky parlor illustration"
            />
            <img 
              className={`${styles.illustration} max-w-md absolute bottom-10 left-5`}
              src={illustration3}
              alt="Sky parlor illustration"
            />
          </div>
        );

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
              <button className="fixed top-2 -left-8 z-20 md:left-0" onClick={handleCartToggle}>
                <Cube />
              </button>
              <Logo />
              <div className="relative grid md:grid-cols-3 gap-1">
                <img 
                  className={`${styles.illustration} w-full px-10 py-6 pt-10 md:py-6`}
                  src={illustration1}
                  alt="Sky parlor illustration"
                />
                <img 
                  className={`${styles.illustration} w-full px-10 py-6 md:py-6`}
                  src={illustration2}
                  alt="Sky parlor illustration"
                />
                <img 
                  className={`${styles.illustration} w-full px-10 py-6 pl-12 md:py-6 md:px-10`}
                  src={illustration3}
                  alt="Sky parlor illustration"
                />
              </div>
              <div className="relative flex-col items-center gap-10 p-8 md:p-12 xl:p-14">
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
