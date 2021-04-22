import { useGlobalData } from '../../utils'
import { ProductList } from '../../patterns'

export default function ProductListWithProps() {
  const { pageData } = useGlobalData()
  const { category, manufacturer } = pageData

  const products = category?.products ?? manufacturer?.products ?? []
  const title = category?.title ?? manufacturer?.title ?? ''

  const productListProps = {
    title,
    products,
  }

  return (
    <>
      <ProductList {...productListProps} />
    </>
  )
}
