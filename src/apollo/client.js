import ApolloClient from 'apollo-client'
import fetch from 'isomorphic-fetch'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { from, ApolloLink, Observable } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: null,
    },
  }
})

const httpLink = createHttpLink({
  uri: `${
    typeof window !== 'undefined' && window.env
      ? window.env.BACKEND_URL
      : 'https://api-stage.santiment.net'
  }/graphql`,
  credentials: 'include',
})

// Avoid external network calls during SSR to speed up builds and prevent failures
const ssrNoopLink = new ApolloLink(() =>
  new Observable(observer => {
    observer.next({ data: {} })
    observer.complete()
  })
)

export const client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link:
    typeof window === 'undefined' ? ssrNoopLink : from([authLink, httpLink]),
  cache: new InMemoryCache(),
  fetch,
})
