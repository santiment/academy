import gql from 'graphql-tag'

const userDataFragment = gql`
  fragment userDataFragment on User {
    id
    email
    username
    privacyPolicyAccepted
    apikeys
    subscriptions {
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

export const USER_PAYMENTS = gql`
  query {
    payments {
      amount
      createdAt
      description
      receiptUrl
      status
    }
  }
`

export const CURRENT_USER_QUERY = gql`
  query {
    currentUser {
      ...userDataFragment
    }
  }
  ${userDataFragment}
`

export const GENERATE_APIKEY_MUTATION = gql`
  mutation {
    apikeysMutation: generateApikey {
      apikeys
    }
  }
`

export const REVOKE_APIKEY_MUTATION = gql`
  mutation revokeApikey($apikey: String!) {
    apikeysMutation: revokeApikey(apikey: $apikey) {
      apikeys
    }
  }
`

export const GDPR_MUTATION = gql`
  mutation updateTermsAndConditions($privacyPolicyAccepted: Boolean!) {
    updateTermsAndConditions(privacyPolicyAccepted: $privacyPolicyAccepted) {
      id
      privacyPolicyAccepted
    }
  }
`

export const VERIFY_EMAIL_MUTATION = gql`
  mutation emailLoginVerify($email: String!, $token: String!) {
    emailLoginVerify(email: $email, token: $token) {
      token
      user {
        ...userDataFragment
      }
    }
  }

  ${userDataFragment}
`

export const EMAIL_LOGIN_MUTATION = gql`
  mutation($email: String!, $consent: String!) {
    emailLogin(email: $email, consent: $consent) {
      success
    }
  }
`
