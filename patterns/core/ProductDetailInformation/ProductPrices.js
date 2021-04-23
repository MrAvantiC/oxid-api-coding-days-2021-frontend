import { FormattedPrice } from '../..'

// TODO: real check for reduced prices
// TODO: handle reduced pricing and related styling properly
export default function ProductPrices(props) {
  const { price = {}, listPrice = {} } = props

  return (
    <div className="product-detail-information__prices">
      <FormattedPrice
        price={price.price}
        className={'product-detail-information__price'}
      />

      {listPrice.price && (
        <FormattedPrice
          price={listPrice.price}
          className={
            'product-detail-information__price product-detail-information__price--list'
          }
        />
      )}
    </div>
  )
}
