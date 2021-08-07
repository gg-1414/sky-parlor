import ProductList from '../components/ProductList';
import Cart from '../components/Cart/index';
import logoGif from '../assets/logo.gif';
import illustration1 from '../assets/illustration-1.png';
import illustration2 from '../assets/illustration-2.png';
import illustration3 from '../assets/illustration-3.png';
import styles from '../styles/pages/Home.module.scss'
import { ShopifyContext } from '../context/ShopifyContext';
import CartIcon from '../components/Cart/CartIcon';
import Cube from '../components/Cube';

const Logo = () => {
  return (
    <img 
      className={`${styles.logo} m-auto absolute -right-1 md:right-6 -top-2 md:top-0 z-10`}
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
              <button className="absolute top-2 -left-8 z-20 md:left-0" onClick={handleCartToggle}>
                <Cube />
                {/* <CartIcon /> */}
              </button>
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
              <div className="relative flex items-center gap-10">
                <h2 className="text-4xl md:text-8xl text-left mt-4">SHOP</h2>
                <ProductList products={products} />
              </div>
            </div>
          </>
        )
      }}
    </ShopifyContext.Consumer>
  );
};
