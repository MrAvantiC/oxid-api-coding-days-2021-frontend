import { ProductList } from '../../patterns'

export default function ProductListWithProps() {
  // TODO
  const products = []

  const productListProps = {
    products,
  }

  return (
    <>
      <ProductList {...productListProps} />
    </>
  )
}
