import ApolloClient from "apollo-client"
import fetch from "isomorphic-fetch"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { from } from "apollo-link"
import { InMemoryCache } from "apollo-cache-inmemory"

export const getAuthorizeUser = () => {
  if (typeof localStorage !== undefined) {
    return JSON.parse(localStorage.getItem("client") || '""')
  }

  return ""
}

const authLink = setContext((_, { headers }) => {
  // TODO: handle exception on parse
  const { token } = getAuthorizeUser()
  if (!token) {
    return headers
  }
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  }
})

const httpLink = createHttpLink({
  uri: "https://api-stage.santiment.net/graphql",
})

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
  fetch,
})
