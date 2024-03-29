import { gql } from 'apollo-boost'

// post queries
export const GET_POSTS = gql`
  query {
    getPosts {
      _id
      title
      imageUrl
    }
  }
`
// user queries
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      _id
      username
      email
      password
      avatar
      joinDate
      favorites {
        _id
        title
        imageUrl
      }
    }
  }
`

// post mutations
// user mutations
export const SIGNUP_USER = gql`
  mutation($username:String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`

export const SIGNIN_USER = gql`
  mutation($username:String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`

export const SIGNOUT_USER = gql`
  mutation($username:String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`
