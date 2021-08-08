import styles from '../styles/components/Product.module.scss';

export default function Product({ product }) {
  const featuredImg = product.images[0];

  return (
    <div className={`${styles.product}`}>
      <div className={styles.image_wrapper}>
        <img 
          src={featuredImg.src} 
          alt={featuredImg.altText ? featuredImg.altText : "product image" } 
        />
      </div>
      <div className="py-2">
        <h3 className="md:text-4 uppercase">{product.title} - ${product.variants[0].price}</h3>
        {/* <h4 className="">${product.variants[0].price}</h4> */}
      </div>
    </div>
  )
}
