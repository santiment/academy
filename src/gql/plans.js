import gql from 'graphql-tag'

export const PLANS_QUERY = gql`
  query productsWithPlans {
    productsWithPlans {
      name
      plans {
        id
        name
        amount
        interval
      }
    }
  }
`

export const SUBSCRIBE_MUTATION = gql`
  mutation subscribe($cardToken: String!, $planId: Int!) {
    subscribe(cardToken: $cardToken, planId: $planId) {
      id
      cancelAtPeriodEnd
      currentPeriodEnd
      plan {
        id
        name
        amount
        interval
        product {
          name
        }
      }
    }
  }
`
