import { useState } from 'react'
import classNames from 'classnames'
import { ConditionalLink } from '../../..'
import NavigationFlyout from './NavigationFlyout'

const TRANSITION_DELAY_IN_MS = 200

export default function FirstLevelNavigationItem(props) {
  const [isExpanded, toggleExpanded] = useState(false)
  const [timerId, setTimer] = useState(null)
  const { title = '', seo = {}, children = [] } = props

  const hasSubcategories = children.length > 0

  const itemClasses = classNames('desktop-navigation__item', {
    ['desktop-navigation__item--expanded']: isExpanded,
  })

  return (
    <li
      className={itemClasses}
      onMouseEnter={() => {
        clearTimeout(timerId)

        setTimeout(() => toggleExpanded(true), TRANSITION_DELAY_IN_MS)
      }}
      onMouseLeave={() => {
        setTimer(
          setTimeout(() => {
            toggleExpanded(false)
          }, TRANSITION_DELAY_IN_MS)
        )
      }}
    >
      <ConditionalLink
        href={seo?.url}
        className="desktop-navigation__item-link"
        fallbackElement="span"
      >
        {title}
      </ConditionalLink>

      <NavigationFlyout
        isVisible={hasSubcategories && isExpanded}
        subcategories={children}
      />
    </li>
  )
}
