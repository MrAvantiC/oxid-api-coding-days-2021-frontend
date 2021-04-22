import { Icon, Link, ConditionalLink } from '../../..'

export default function NavigationFlyoutColumn(props) {
  const { title = '', seo = {}, children = [] } = props

  const hasSubcategories = children.length > 0

  return (
    <div className="desktop-navigation__flyout-column">
      <ConditionalLink
        href={seo?.url}
        className="desktop-navigation__flyout-column-header"
        fallbackElement="span"
      >
        {title}
      </ConditionalLink>

      {hasSubcategories && (
        <ul className="desktop-navigation__flyout-column-list">
          {children.map((entry) => (
            <li key={entry.uuid}>
              <Link href={entry.seo?.url}>
                <span>{entry.title}</span>

                <Icon symbol="chevron-right" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
