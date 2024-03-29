import React, { Component, useContext } from 'react'
import { gql } from 'graphql-request'
import isEqual from 'lodash/isEqual'
import { v4 as uuidv4 } from 'uuid'
import { GraphQLClient } from '../..'

/* First we will make a new context */
const GlobalDataContext = React.createContext()

/* Then create a provider Component */
class GlobalDataProvider extends Component {
  constructor(props) {
    super(props)

    const { children, ...initialState } = props

    this.state = {
      ...initialState,
      basket: {
        id: null,
        items: [],
      },
      totalItemCount: 0,
    }
  }

  static getDerivedStateFromProps(props, state) {
    // Update State when needed (e.g. filtering, paginating, etc)
    if (
      !isEqual(props.pageData, state.pageData) ||
      !isEqual(props.searchResult, state.searchResult) ||
      !isEqual(props.params, state.params)
    ) {
      // We don't need to update menuData though
      const { children, menuData, ...updatedState } = props

      return updatedState
    }

    // No updates
    return null
  }

  async componentDidMount() {
    await this.getToken()

    window.addEventListener('update:basket', this.handleUpdateBasketItems)
  }

  componentWillUnmount = () => {
    window.removeEventListener('update:basket', this.handleUpdateBasketItems)
  }

  getToken = async () => {
    /**
     * FIXME:
     * OXID does not support creation of anonymous baskets.
     * To get around this, we create a token with a hard-coded guest-user here
     * which we use for our basket mutations
     */

    const query = gql`
      query {
        token(username: "${process.env.GUEST_USER}", password: "${process.env.GUEST_PASSWORD}")
      }
    `

    const response = await GraphQLClient.request(query)

    this.setState({ token: response.token }, this.fetchOrCreateBasket)
  }

  fetchOrCreateBasket = async () => {
    GraphQLClient.setHeader('authorization', `Bearer ${this.state.token}`)

    let basket

    if (localStorage.getItem('basket')) {
      basket = JSON.parse(localStorage.getItem('basket'))

      this.setState({ basket }, this.updateLocalStorage)
    } else {
      const mutation = gql`
        mutation {
          basketCreate(basket: { title: "${uuidv4()}", public: false }) {
            id
          }
        }
      `

      const response = await GraphQLClient.request(mutation)

      this.setState(
        { basket: { ...this.state.basket, id: response.basketCreate.id } },
        this.updateLocalStorage
      )
    }
  }

  handleUpdateBasketItems = (event) => {
    const { items } = event.detail

    this.updateBasketItems(items)
  }

  updateBasketItems = (items = []) => {
    const totalItemCount = items.reduce((total, current) => {
      total = total + current.amount

      return total
    }, 0)

    this.setState(
      { basket: { ...this.state.basket, items }, totalItemCount },
      this.updateLocalStorage
    )
  }

  updateLocalStorage = () => {
    // We stringify our object here, beause the JSON is quite big and
    // parsing big JSON-Strings is more efficient than parsing big
    // Object-literals
    // see: https://v8.dev/blog/cost-of-javascript-2019#json
    localStorage.setItem('menuData', JSON.stringify(this.state.menuData))

    if (this.state.basket) {
      localStorage.setItem('basket', JSON.stringify(this.state.basket))
    }

    if (this.state.token) {
      localStorage.setItem('token', JSON.stringify(this.state.token))
    }
  }

  render() {
    return (
      <GlobalDataContext.Provider value={this.state}>
        {this.props.children}
      </GlobalDataContext.Provider>
    )
  }
}

function useGlobalData() {
  return useContext(GlobalDataContext)
}

export default GlobalDataContext
export { GlobalDataProvider, useGlobalData }
