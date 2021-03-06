import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    load (email: String!): User! @auth
    all: [User!] @auth
    login (email: String!, password: String!): Account! 
  }

  extend type Mutation {
    signUp (email: String!, password: String!, passwordConfirmation: String!): Email!
    delete (email: String!): Result @auth
    update (currentEmail: String!, newEmail: String!, newPassword: String!): Email! @auth
  }

  type User {
    email: String!
    password: String!
  }

  type Account {
    accessToken: String!
    email: String!
  }

  type Email {
    email: String!
  }

  type Result {
    result: String
  }
`
