import { gql } from 'graphql-request'
import { GraphQLClient } from '../..'

export default async function fetchMenuData() {
  let data

  if (process.browser && localStorage.getItem('menuData')) {
    const menuString = localStorage.getItem('menuData')

    data = JSON.parse(menuString)
  } else {
    data = await fetchMenuFromApi()
  }

  return data
}

async function fetchMenuFromApi() {
  const query = gql`
    query {
      categories {
        id
        title
        seo {
          url
        }
        children {
          id
          title
          seo {
            url
          }
          children {
            id
            title
            seo {
              url
            }
            children {
              id
              title
              seo {
                url
              }
              children {
                id
                title
                seo {
                  url
                }
                children {
                  id
                  title
                  seo {
                    url
                  }
                  children {
                    id
                    title
                    seo {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  const response = await GraphQLClient.request(query)

  return response.categories
}
