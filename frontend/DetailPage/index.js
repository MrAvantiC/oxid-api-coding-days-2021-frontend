import { useGlobalData } from '../../utils'
import { ProductDetailInformation } from '../../patterns'

function DetailPage() {
  const { pageData } = useGlobalData()
  const productDetailProps = { ...pageData.data.self }

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
