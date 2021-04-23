import { Header } from '../../patterns'
import { useGlobalData, useTranslation } from '../../utils'

export default function HeaderWithProps() {
  const { menuData, totalItemCount } = useGlobalData()
  const { language } = useTranslation()

  const headerProps = {
    menu: menuData,
    totalItemCount,
    fetchAutosuggestResult: (searchPhrase) =>
      console.log('fetchAutosuggestResult()', searchPhrase, language),

    submitSearchForm: (searchPhrase) =>
      console.log('fetchAutosuggestResult()', searchPhrase, language),
  }

  return <Header {...headerProps} />
}
