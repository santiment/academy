import React from "react"
import gql from "graphql-tag"
import { navigate } from "gatsby"
import { Mutation } from "react-apollo"
import { parse } from "query-string"
import Layout from "../components/layout"

const VERIFY_EMAIL_MUTATION = gql`
  mutation emailLoginVerify($email: String!, $token: String!) {
    emailLoginVerify(email: $email, token: $token) {
      token
      user {
        id
        email
        username
        privacyPolicyAccepted
        marketingAccepted
        consent_id
        sanBalance
        ethAccounts {
          address
          sanBalance
        }
      }
    }
  }
`

export default ({ location: { search } }) => (
  <Layout>
    <Mutation mutation={VERIFY_EMAIL_MUTATION}>
      {(verifyEmail, { called, error, data }) => {
        if (!called) {
          verifyEmail({ variables: parse(search) })
        }
        if (error) {
          return "Can't verify this email"
        }
        if (data) {
          if (typeof window !== "undefined") {
            localStorage.setItem(
              "client",
              JSON.stringify(data.emailLoginVerify)
            )
          }
          navigate("/account")
        }

        return "Verifying ...."
      }}
    </Mutation>
  </Layout>
)
