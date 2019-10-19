import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
// import Search from '../components/Search/Search'
import Category from '../components/Category/Category'
import {CATEGORIES} from '../utils/docs'
import GettingStarted from "../components/GettingStarted/GettingStarted"
import styles from './index.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Academy - Santiment Technical Documentation" />
    <section className={styles.wrapper}>
    	{/* <Search /> */}
      <div className='container'>
      <GettingStarted className={styles.startBlock}/>
      {CATEGORIES.map(({title, ...rest}) => <Category key={title} title={title} {...rest} />)}
      </div>
    </section>
  </Layout>
)

export default IndexPage
