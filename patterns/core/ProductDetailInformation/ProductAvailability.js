import classNames from 'classnames'
import { useTranslation } from '../../../utils'

export default function ProductAvailability(props) {
  const { deliveryTime = {} } = props
  const { t } = useTranslation()
  const isOnStock = true

  const classes = classNames('product-detail-information__availability', {
    ['product-detail-information__availability--on-stock']: isOnStock,
  })

  return (
    <span className={classes}>
      <span className="product-detail-information__availability-icon" />
      {deliveryTime.minDeliveryTime} - {deliveryTime.maxDeliveryTime}{' '}
      {t(deliveryTime.deliveryTimeUnit)}
    </span>
  )
}
