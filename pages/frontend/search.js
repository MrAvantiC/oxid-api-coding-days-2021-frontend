import { Component } from 'react'
import {
  HeaderWithProps,
  FooterWithProps,
  SearchResultPage,
} from '../../frontend'
import { BaseLayout } from '../../patterns'
import {
  GlobalDataProvider,
  ConfigurationProvider,
  TranslationProvider,
} from '../../utils'
import ErrorPage from '../_error'

export default class Index extends Component {
  static async getInitialProps(ctx) {
    const { res } = ctx

    try {
      // const [searchResult, menuData] = await Promise.all([
      // fetchSearchResult({ ctx }),
      // fetchMenuData(),
      // ])

      return { menuData: {}, searchResult: {} }
    } catch (error) {
      console.error(error)

      if (res) {
        res.statusCode = 500
      }

      /**
       * Returning an empty here is intentional, see:
       * https://github.com/zeit/next.js/blob/master/errors/empty-object-getInitialProps.md
       */
      return {}
    }
  }

  render() {
    if (Object.entries(this.props).length === 0) {
      return <ErrorPage statusCode={500} />
    }

    const { searchResult = {} } = this.props
    const { language } = searchResult

    return (
      <GlobalDataProvider {...this.props}>
        <ConfigurationProvider assetUrl={process.env.MAKAIRA_ASSET_URL}>
          <TranslationProvider language={language}>
            <BaseLayout>
              <HeaderWithProps />

              <SearchResultPage />

              <FooterWithProps />
            </BaseLayout>
          </TranslationProvider>
        </ConfigurationProvider>
      </GlobalDataProvider>
    )
  }
}
