import classNames from 'classnames'
import { Button } from '../../..'
import NavigationItem from './NavigationItem'
import InfoLinks from './InfoLinks'

export default function MobileNavigation(props) {
  const {
    menu = [],
    isMobileNavigationVisible = false,
    hideMobileNavigation,
  } = props

  const flyoutClasses = classNames('mobile-navigation__flyout', {
    'mobile-navigation__flyout--visible': isMobileNavigationVisible,
  })

  return (
    <div className={flyoutClasses}>
      <div className="mobile-navigation__header">
        <Button
          variant="icon-only"
          icon="times"
          onClick={hideMobileNavigation}
        />
      </div>

      <nav className="mobile-navigation" arial-label="Primary Navigation">
        <ul>
          {menu.map((entry) => (
            <NavigationItem key={entry.id} {...entry} isMainCategory={true} />
          ))}
        </ul>
      </nav>

      <InfoLinks />
    </div>
  )
}
