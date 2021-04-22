import { Component } from 'react'
import List from './List'
import { dispatchShowOverlayEvent, scrollTo } from '../../../utils'

class ProductList extends Component {
  constructor(props) {
    super(props)

    this.state = { isMobileFilterVisible: false, isLoading: false }
  }

  componentDidMount() {
    window.addEventListener('overlay:clicked', this.hideMobileFilter)
  }

  componentWillUnmount() {
    window.removeEventListener('overlay:clicked', this.hideMobileFilter)
  }

  showMobileFilter = () => {
    dispatchShowOverlayEvent()
    this.setState({ isMobileFilterVisible: true })
  }

  hideMobileFilter = () => {
    this.setState({ isMobileFilterVisible: false })
  }

  handleFormSubmit = async (options = {}) => {
    const { resetPagination = false } = options

    this.setState({ isLoading: true })
    await this.props.submitForms({ resetPagination })
    this.setState({ isLoading: false })
  }

  handleFormSubmitWithPaginationReset = () => {
    this.handleFormSubmit({ resetPagination: true })
  }

  handlePagination = () => {
    scrollTo({ id: 'body' })

    this.handleFormSubmit()
  }

  render() {
    const {
      products = [],
      queryParams = {},
      totalProductCount = 0,
    } = this.props

    return (
      <section className="product-list">
        <div className="product-list__wrapper">
          <List
            products={products}
            queryParams={queryParams}
            totalProductCount={totalProductCount}
            submitForms={this.handlePagination}
            isLoading={this.state.isLoading}
          />
        </div>
      </section>
    )
  }
}

export default ProductList
export { default as productListVariants } from './variants.js'
