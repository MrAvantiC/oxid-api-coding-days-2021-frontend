import { useGlobalData, addToBasket } from '../../utils'
import { ProductDetailInformation } from '../../patterns'

function DetailPage() {
  const { pageData } = useGlobalData()

  function handleToBasket(amount) {
    addToBasket({
      productId: pageData.objectId,
      amount,
    })
  }

  const productDetailProps = {
    ...pageData.product,
    handleToBasket,
  }

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
