import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import IntroBlocks from '../components/IntroBlocks/IntroBlocks'

const ForTraders = () => (
  <Layout isShowSidebar={true}>
    <SEO title="Academy - Intro for traders" />
    <IntroBlocks userType='trader' />
  </Layout>
)

export default ForTraders
