import styles from '../../styles/components/Cart.module.scss';

export default function LineItem({ item, updateQuantityInCart, removeLineItemInCart }) {

  const decrementQuantity = (lineItemId) => {
    const updatedQuantity = item.quantity - 1;
    updateQuantityInCart(lineItemId, updatedQuantity);
  }

  const incrementQuantity = (lineItemId) => {
    const updatedQuantity = item.quantity + 1;
    updateQuantityInCart(lineItemId, updatedQuantity);
  }

  return (
    <li className={styles.line_item}>
      <div className={styles.line_item_img}>
        {item.variant.image
          ? (
            <img 
              src={item.variant.image.src} 
              alt={`${item.title} product shot`}
            />
          ) : null}
      </div>

      <div className={styles.line_item_content}>
        <div className={styles.line_item_row}>
          <div className={styles.line_item_variant_title}>
            {item.variant.title}
          </div>
          <span className={styles.line_item_title}>
            {item.title}
          </span>
        </div>
        
        <div className={styles.line_item_row}>
          <div className={styles.line_item_quantity_container}>
            <button 
              className="Line-item__quantity-update" 
              onClick={() => decrementQuantity(item.id)}
            >
              -
            </button>

            <span className="Line-item__quantity">{item.quantity}</span>

            <button 
              className="Line-item__quantity-update"
              onClick={() => incrementQuantity(item.id)}
            >
              +
            </button>
          </div>

          <span className={styles.line_item_price}>$</span>

          <button
            className={styles.line_item_remove}
            onClick={removeLineItemInCart(item.id)}
          >
            x
          </button>
        </div>
      </div>
    </li>
  )
}
