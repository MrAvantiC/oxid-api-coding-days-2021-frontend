import NavigationItem from './NavigationItem'
import { useTranslation } from '../../../../utils'

export default function SubcategoryList(props) {
  const { isVisible = false, subcategories = [], parent = {} } = props

  if (!isVisible) return null

  return (
    <ul className="mobile-navigation__subcategories">
      <ParentItem {...parent} />

      {subcategories.map((entry) => (
        <NavigationItem key={entry.id} {...entry} />
      ))}
    </ul>
  )
}

function ParentItem(props) {
  const { t } = useTranslation()
  const { shouldRender = false } = props

  if (!shouldRender) return null

  // We have to construct the title of the menu entry
  // we want to have for our parent item
  const title = t('MOBILE_FILTER_PARENT_ITEM')

  return <NavigationItem {...props} title={title} />
}
