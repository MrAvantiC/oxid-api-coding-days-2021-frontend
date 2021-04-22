import { gql } from 'graphql-request'
import { normalizeUrlPath, GraphQLClient } from '../..'

export default async function fetchPageData({ ctx }) {
  const {
    query: { seoUrl: url },
  } = ctx

  // TODO: handle homepage
  const normalizedPath = normalizeUrlPath(url)

  const query = gql`
    query {
      seoUrl(seoUrl: "${normalizedPath}") {
        type
        objectId
        stdUrl
        lang
      }
    }
  `

  const data = await GraphQLClient.request(query)

  return { ...data.seoUrl }
}
