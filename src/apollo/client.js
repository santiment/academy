import ApolloClient from "apollo-client"
import fetch from "isomorphic-fetch"
import { createHttpLink } from "apollo-link-http"
import { setContext } from "apollo-link-context"
import { from } from "apollo-link"
import { InMemoryCache } from "apollo-cache-inmemory"

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
    typeof window !== "undefined" && window.env
      ? window.env.BACKEND_URL
      : "https://api-stage.santiment.net"
  }/graphql`,
  credentials: "include",
})

export const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),
  fetch,
})
