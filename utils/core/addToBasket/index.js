import { gql } from 'graphql-request'
import { GraphQLClient } from '../..'

export default async function addToBasket({ productId, amount = 1 }) {
  const basket = JSON.parse(localStorage.getItem('basket'))

  if (!basket || !productId) return

  const mutation = gql`
    mutation {
      basketAddProduct(
        basketId: "${basket.id}"
        productId: "${productId}"
        amount: ${amount}
      ) {
        items {
          amount
          product {
            id
            title
          }
        }
      }
    }
  `

  const response = await GraphQLClient.request(mutation)
  console.log(response)
}
