import React from "react"
import { Link } from "gatsby"
import Panel from "@santiment-network/ui/Panel/Panel"
import Input from "@santiment-network/ui/Input"
import Button from "@santiment-network/ui/Button"
import Icon from "@santiment-network/ui/Icon"
import gql from "graphql-tag"
import cx from "classnames"
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
      {(
        addBlog,
        { loading, error, data: { emailLogin: { success } = {} } = {} }
      ) => (
        <Panel className={styles.wrapper}>
          <h2 className={cx(styles.title, styles.email__title)}>
            Authenticate
          </h2>
          {success ? (
            <h3 className={styles.email__subtitle}>
              We sent an email to you. Please login in to email provider and
              click the confirm link. Waiting for your confirmation...
            </h3>
          ) : (
            <>
              <h3 className={styles.email__subtitle}>
                To sign up or log in, fill in your email address below
              </h3>
              <form
                className={styles.email__form}
                action=""
                onSubmit={e => {
                  e.preventDefault()
                  addBlog({
                    variables: {
                      email: e.currentTarget.email.value,
                      consent: "",
                    },
                  })
                }}
              >
                <Input placeholder="your@email.com" name="email" type="email" />
                <Button
                  variant="fill"
                  accent="blue"
                  className={styles.email__btn}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Waiting..." : "Continue"}
                </Button>
              </form>
            </>
          )}
          <Link to="/login" className={styles.email__link}>
            <Icon className={styles.email__pointer} type="pointer-right" />
            All login options
          </Link>
        </Panel>
      )}
    </Mutation>
  </Layout>
)
