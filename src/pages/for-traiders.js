import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import IntroBlocks from '../components/IntroBlocks/IntroBlocks'

const ForTraiders = () => (
  <Layout>
    <SEO title="Academy - Intro for traiders" />
    <IntroBlocks userType='trader' />
  </Layout>
)

export default ForTraiders
