import { useRef } from 'react'
import classNames from 'classnames'
import { useLazyLoading } from '../../../utils'
import ProductTile from './ProductTile'

export default function List(props) {
  const { products = [], isLoading = false } = props
  const listRef = useRef(null)

  useLazyLoading({ ref: listRef, dependency: products })

  const classes = classNames('product-list__list', {
    ['product-list__list--loading']: isLoading,
  })

  return (
    <div ref={listRef} className={classes}>
      {products.map((entry) => {
        return <ProductTile key={entry.id} {...entry} />
      })}
    </div>
  )
}
