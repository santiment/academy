import React from 'react'
import cx from 'classnames'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ChangelogList from '../../components/ChangelogList/ChangelogList'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { ASSETS_QUERY } from '../../gql/changelog'
import styles from './changelog.module.scss'
import ArticleFooter from '../../components/ArticleFooter'

const CreatedAssetItem = ({ item }) => {
  const name = item.asset?.name
  const ticker = item.asset?.ticker
  const link = item.asset?.link
  const timestamp = new Date(item.eventTimestamp).toLocaleString()

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <strong>Created</strong> {name}
      {ticker && ` (${ticker})`} — <time>{timestamp}</time>
    </a>
  )
}

const HiddenAssetItem = ({ item }) => {
  const name = item.asset?.name
  const ticker = item.asset?.ticker
  const reason = item.hidingReason
  const timestamp = new Date(item.eventTimestamp).toLocaleString()

  return (
    <>
      <strong>Hidden</strong> {name}
      {ticker && ` (${ticker})`} — <time>{timestamp}</time>
      {reason && ` — ${reason}`}
    </>
  )
}

const meta = {
  title: 'Assets | Santiment Academy',
  description:
    'Keep track of development updates, new product features and other items from our changelog',
}

const AssetsPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout isShowSidebar>
      <SEO {...meta} />
      <div className={cx(styles.wrapper, 'container')}>
        <Breadcrumb crumbs={crumbs} crumbLabel="Assets" />
        <ChangelogList
          title="Changelog Assets"
          queryDocument={ASSETS_QUERY}
          queryRoot="assetsChangelog"
          createdKey="createdAssets"
          removedKey="hiddenAssets"
          pageSize={20}
          renderCreatedItem={item => <CreatedAssetItem item={item} />}
          renderRemovedItem={item => <HiddenAssetItem item={item} />}
        />
        <ArticleFooter />
      </div>
    </Layout>
  )
}

export default AssetsPage
