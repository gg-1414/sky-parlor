import { Link } from 'react-router-dom';
import styles from '../styles/components/Product.module.scss';

export default function Product({ product }) {
  if (!product || !product.title || !product.images.length) {
    return <div className={`${styles.product} product_empty`} />
  }

  const featuredImg = product.images[0];

  const onProductClick = () => {
    console.log('clicked')
  }

  return (
    <div className={`${styles.product} mx-auto`}>
      <Link to={`/product/${product.id}`} onClick={onProductClick}>
        <div className={styles.image_wrapper}>
          <img 
            src={featuredImg.src}
            alt={featuredImg.altText ? featuredImg.altText : product.title }
          />
        </div>
      </Link>
      <div className="py-2">
        <h3 className="md:text-4 uppercase">{product.title} - ${product.variants[0].price}</h3>
      </div>
    </div>
  );
};
