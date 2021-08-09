import LineItem from './LineItem';
import styles from '../../styles/components/Cart.module.scss';

export default function Cart({
  checkout,
  isCartOpen,
  handleCartToggle,
  updateQuantityInCart,
  removeLineItemInCart,
}) {

  const getLineItems = () => {
    if (checkout.lineItems) {
      const lineItems = checkout.lineItems.map((it) => {
        return (
          <LineItem
            key={it.id.toString()}
            item={it}
            updateQuantityInCart={updateQuantityInCart}
            removeLineItemInCart={removeLineItemInCart}
          />
        );
      });

      if (lineItems.length) return lineItems;
      return <span>There are no items in your cart.</span>;
    };
  }

  if (checkout) {
    return (
      <div className={`${styles.Cart} ${isCartOpen ? styles.Cart_open : null}`}>
        <header className={`${styles.header}`}>
          <h2 className="text-xl">YOUR CART</h2>
          <button onClick={handleCartToggle} className={styles.close}>
            x
          </button>
        </header>

        <ul className={`${styles.line_items} p-6`}>
          {getLineItems()}
        </ul>

        <div className="px-6 absolute bottom-6 w-full">
          <button className={styles.checkout_btn} onClick={() => window.open(checkout.webUrl)}>CHECKOUT</button>
        </div>
      </div>
    );
  } else {
    return <div></div>
  }

};
