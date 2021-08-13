import Product from './Product'
import styles from '../styles/pages/Home.module.scss';

export default function ProductList({ products }) {
  return (
    <div className={`${styles.ProductList} grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 relative mt-6 md:mt-12`}>
      {products.map((product, index) => {
        return (
          <Product
            product={product}
            key={index}
          />
        )
      })}
    </div>
  );
};
