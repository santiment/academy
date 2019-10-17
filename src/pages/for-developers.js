import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import IntroBlocks from '../components/IntroBlocks/IntroBlocks'

const ForDevelopers = () => (
  <Layout>
    <SEO title="Academy - Intro for developers" />
    <IntroBlocks userType='developer' />
  </Layout>
)

export default ForDevelopers
