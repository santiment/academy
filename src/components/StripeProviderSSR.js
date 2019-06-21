import React from 'react'
import { StripeProvider } from 'react-stripe-elements'

class StripeProviderSSR extends React.Component {
  constructor() {
    super()
    this.state = { stripe: null }
  }
  componentDidMount() {
    this.setState({ stripe: window.Stripe('pk_test_gy9lndGDPXEFslDp8mJ24C3p') })
  }
  render() {
    return (
      <StripeProvider stripe={this.state.stripe}>
        {this.props.children}
      </StripeProvider>
    )
  }
}

export default StripeProviderSSR
