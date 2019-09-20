import React from 'react'
import { FormattedMessage } from 'gatsby-plugin-intl'

export const tr = id => <FormattedMessage id={id} />

export const trStr = (intl, id) =>
  intl.formatMessage({
    id,
  })
