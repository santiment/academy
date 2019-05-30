import React from "react"
import Panel from "@santiment-network/ui/Panel/Panel"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import Layout from "../../components/layout"
import styles from "./index.module.scss"

const mutation = gql`
  mutation($email: String!, $consent: String!) {
    emailLogin(email: $email, consent: $consent) {
      success
    }
  }
`

export default () => (
  <Layout>
    <Mutation mutation={mutation}>
      {(addBlog, { loading, error }) => (
        <Panel className={styles.wrapper}>
          <h2 className={styles.title}>Log in your account with</h2>
          <form
            action=""
            onSubmit={e => {
              e.preventDefault()
              addBlog({
                variables: { email: e.currentTarget.email.value, consent: "" },
              })
            }}
          >
            <input name="email" type="email" />
            <button>Continue</button>
          </form>
        </Panel>
      )}
    </Mutation>
  </Layout>
)
