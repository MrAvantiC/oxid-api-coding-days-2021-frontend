import { gql } from 'graphql-request'
import { normalizeUrlPath, GraphQLClient } from '../..'

export default async function fetchPageData({ ctx }) {
  const {
    query: { seoUrl: url },
  } = ctx

  // TODO: handle homepage
  const normalizedPath = normalizeUrlPath(url)

  // TODO: reduced prices?
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
            currency {
              sign
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
