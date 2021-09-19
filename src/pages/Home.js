import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart/index';
import Header from '../components/Header';
import styles from '../styles/pages/Home.module.scss';
import { ShopifyContext } from '../context/ShopifyContext';

export default function Home() {
  const [access, setAccess] = useState(false);
  const [input, setInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const correctPasscode = "DICE";

  useEffect(() => {
    if (input.length === 4) {
      if (input === correctPasscode) {
        setAccess(true);
      } else {
        setErrorMessage('Incorrect Passcode');
      }
    }
  }, [input])

  if (!access) {
    return (
      <div className={`${styles.enter_passcode} relative`}>
        <img
          src={'/assets/logo.gif'}
          alt="sky parlor spinning logo"
          className={`absolute max-w-xs left-2/4 transform -translate-x-2/4`}
        />
        <div className={`${styles.enter_passcode_container} flex flex-col items-center justify-center`}>
          <h1 className="text-2xl my-4">Enter Passcode</h1>
          <form>
            <input 
              type="text"
              placeholder="XXXX"
              maxLength="4"
              required
              onChange={(e) => setInput(e.target.value)}
              className="p-4"
            />
          </form>
          <p className="text-sm mt-4 text-red-500">{!!errorMessage ? errorMessage : null}</p>
        </div>
      </div>
    );
  }

  else {
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
                    <img src="/assets/illustration-1.png" alt={"illustration of clothing"} />
                  </div>
                  <div className={`${styles.illustration}`}>
                    <img src="/assets/illustration-2.png" alt={"illustration of clothing"} />
                  </div>
                  <div className={`${styles.illustration}`}>
                    <img src="/assets/illustration-3.png" alt={"illustration of clothing"} />
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
  }
};
