import { ShopifyContext } from '../context/ShopifyContext';
import Product from './Product'

export default function ProductList() {
  return (
    <ShopifyContext.Consumer>
      {({ products }) => {
        if (products) {
          return (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative mt-10">
              {products.map((product, index) => {
                return (
                  <Product product={product} key={index} />
                )
              })}
            </div>
          )
        }
      }}
    </ShopifyContext.Consumer>
  )
}
