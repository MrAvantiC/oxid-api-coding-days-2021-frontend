import { useState } from 'react'
import { Button, Dropdown } from '../..'
import { useTranslation } from '../../../utils'

export default function ProductActions(props) {
  const { t } = useTranslation()
  const [amount, setAmount] = useState(1)

  const quantities = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
  ]

  function addToBasket() {
    props.handleToBasket(amount)
  }

  return (
    <div className="product-detail-information__actions">
      <Button
        icon="heart"
        className="product-detail-information__wishlist"
        variant="icon-only"
      />

      <Dropdown
        id="sizeVariant"
        options={quantities}
        onChange={({ value }) => setAmount(value)}
        className="product-detail-information__quantity-select"
      />

      <Button
        variant="primary-alt"
        icon="cart"
        iconPosition="left"
        onClick={addToBasket}
      >
        {t('PRODUCT_DETAIL_ADD_TO_CART')}
      </Button>
    </div>
  )
}
