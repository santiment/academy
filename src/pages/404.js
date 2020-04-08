import React from "react"
import Button from "@santiment-network/ui/Button"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from "./404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Looks like you get lose</h1>
      <p className={styles.desc}>
        This page is missing or you assembled the link incorrectly.
      </p>
      <Button
        variant='fill'
        accent='positive'
        as={Link}
        to='/'
        className={styles.button}
      >
        Back to home page
      </Button>
    </div>
  </Layout>
)

export default NotFoundPage
