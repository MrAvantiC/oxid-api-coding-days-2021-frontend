import FirstLevelNavigationItem from './FirstLevelNavigationItem'

export default function DesktopNavigation(props) {
  const { menu = [] } = props

  const rendered = menu.slice(0, 6)

  return (
    <nav className="desktop-navigation__wrapper">
      <ul className="desktop-navigation">
        {rendered.map((entry) => (
          <FirstLevelNavigationItem key={entry.id} {...entry} />
        ))}
      </ul>
    </nav>
  )
}
