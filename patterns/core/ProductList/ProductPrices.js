import { FormattedPrice } from '../..'

// TODO: real check for reduced prices
// TODO: handle reduced pricing and related styling properly
export default function ProductPrices(props) {
  const { varMinPrice = 0.0 } = props

  return (
    <div className="product-item__prices">
      <FormattedPrice price={varMinPrice} className={'product-item__price'} />
    </div>
  )
}
