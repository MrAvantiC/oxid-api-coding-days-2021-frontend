import { GraphQLClient } from 'graphql-request'

const { GRAPHQL_ENDPOINT } = process.env

export default new GraphQLClient(GRAPHQL_ENDPOINT)
