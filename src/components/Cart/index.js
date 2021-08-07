import LineItem from './LineItem';
import styles from '../../styles/components/Cart.module.scss';

export default function Cart({
  checkout,
  isCartOpen,
  handleCartToggle,
  updateQuantityInCart,
  removeLineItemInCart,
}) {

  let lineItems = [];

  if (checkout) {
    lineItems = checkout.lineItems?.map(it => {
      return (
        <LineItem
          key={it.id.toString()}
          item={it}
          updateQuantityInCart={updateQuantityInCart}
          removeLineItemInCart={removeLineItemInCart}
        />
      )
    })
  }

  if (lineItems) {
    return (
      <div className={`${styles.Cart} ${isCartOpen ? styles.Cart_open : null}`}>
        <header className={styles.header}>
          <h2>Your cart</h2>
          <button onClick={handleCartToggle} className={styles.close}>
            x
          </button>
        </header>
        <ul className={styles.line_items}>
          {lineItems.length >= 1 ? lineItems : 'There are no items in your cart'}
        </ul>
      </div>
    );
  }

  return <div className={styles.Cart}></div>
};
