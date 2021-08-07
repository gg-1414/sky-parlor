import styles from '../styles/components/Product.module.scss';

export default function Product({ product }) {
  console.log('product',product)
  const featuredImg = product.images[0]
  return (
    <div className={`${styles.product}`}>
      <img 
        src={featuredImg.src} 
        alt={featuredImg.altText ? featuredImg.altText : "product image" } 
      />
      <div className="py-4">
        <h3 className="mt-4 mb-1 md:text-2xl">{product.title}</h3>
        <h4 className="">${product.variants[0].price}</h4>
      </div>
    </div>
  )
}