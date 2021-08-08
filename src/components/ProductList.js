import Product from './Product'

export default function ProductList({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 relative mt-12">
      {products.map((product, index) => {
        return (
          <Product product={product} key={index} />
        )
      })}
    </div>
  )
}
