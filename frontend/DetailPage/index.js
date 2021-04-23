import { useGlobalData } from '../../utils'
import { ProductDetailInformation } from '../../patterns'

function DetailPage() {
  const { pageData } = useGlobalData()
  const productDetailProps = { ...pageData.product }

  return (
    <main>
      <ProductDetailInformation
        key={productDetailProps.id}
        {...productDetailProps}
      />
    </main>
  )
}

export default DetailPage
