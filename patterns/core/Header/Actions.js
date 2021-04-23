import { Button } from '../..'
import { useTranslation } from '../../../utils'

export default function Actions(props) {
  const { t } = useTranslation()

  return (
    <>
      <div className="header__actions header__actions--mobile">
        <Button
          variant="icon-only"
          icon="user"
          href="#todo"
          className="header__action"
        />

        <Button
          variant="icon-only"
          icon="cart"
          href="#todo"
          className="header__action"
        />
      </div>

      <div className="header__actions header__actions--desktop">
        <Button
          icon="user"
          href="#todo"
          className="header__action"
          iconPosition="left"
        >
          {t('HEADER_ACCOUNT_AREA')}
        </Button>

        <Button
          icon="cart"
          href="#todo"
          className="header__action"
          iconPosition="left"
        >
          {props.totalItemCount > 0 && (
            <span className="header__basket-bubble">
              {props.totalItemCount}
            </span>
          )}
        </Button>
      </div>
    </>
  )
}
