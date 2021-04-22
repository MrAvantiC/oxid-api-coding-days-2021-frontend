import { useState } from 'react'
import classNames from 'classnames'
import { ConditionalLink } from '../../..'
import ExpandIcon from './ExpandIcon'
import SubcategoryList from './SubcategoryList'

export default function NavigationItem(props) {
  const [isExpanded, toggleExpanded] = useState(false)
  const {
    title,
    seo = {},
    children = [],
    isMainCategory = false,
    className = '',
  } = props

  const hasSubcategories = children.length > 0

  function handleClick(event) {
    if (hasSubcategories) {
      event.preventDefault()
      toggleExpanded(!isExpanded)
    }
  }

  const itemClasses = classNames(className, 'mobile-navigation__item', {
    'mobile-navigation__item--main': isMainCategory,
    'mobile-navigation__item--no-subcats': !hasSubcategories,
    'mobile-navigation__item--expanded': isExpanded,
  })

  return (
    <>
      <li className={itemClasses}>
        <ConditionalLink
          href={seo?.url}
          onClick={handleClick}
          className="mobile-navigation__link"
          fallbackElement="span"
        >
          <ExpandIcon
            isVisible={hasSubcategories && isMainCategory}
            isExpanded={isExpanded}
          />

          {title}

          <ExpandIcon
            isVisible={hasSubcategories && !isMainCategory}
            isExpanded={isExpanded}
          />
        </ConditionalLink>
      </li>

      <SubcategoryList
        isVisible={hasSubcategories && isExpanded}
        subcategories={children}
        parent={{ link: seo?.url, shouldRender: !!seo?.url }}
      />
    </>
  )
}
