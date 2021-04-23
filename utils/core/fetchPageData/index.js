import { gql } from 'graphql-request'
import { normalizeUrlPath, GraphQLClient } from '../..'
import homepageData from './homepageData'

export default async function fetchPageData({ ctx }) {
  const {
    query: { seoUrl: url },
  } = ctx

  if (url == '/') {
    return {
      type: 'home',
      data: homepageData,
      language: 'de',
    }
  }

  // TODO: handle homepage
  const normalizedPath = normalizeUrlPath(url)

  const query = gql`
    {
      seoUrl(seoUrl: "${normalizedPath}") {
        type
        objectId
        stdUrl
        lang
        category {
          title
          products(pagination: {limit: 25}) {
            id
            title
            varMinPrice
            seo {
              url
            }
            imageGallery {
              thumb
            }
            manufacturer {
              title
            }
          }
        }
        product {
          title
          price {
            price
          }
          longDescription
          deliveryTime {
            minDeliveryTime
            maxDeliveryTime
            deliveryTimeUnit
          }
          imageGallery {
            images {
              image
              zoom
            }
          }
        }
        manufacturer {
          title
          products(pagination: {limit: 25}) {
            id
            title
            varMinPrice
            seo {
              url
            }
            imageGallery {
              thumb
            }
            manufacturer {
              title
            }
          }
        }
      }
    }
  `

  const data = await GraphQLClient.request(query)

  return { ...data.seoUrl }
}
