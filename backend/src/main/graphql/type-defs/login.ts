import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    search (email: String!): User!
    all: [User]!
    login (email: String!, password: String!): Account!
  }

  extend type Mutation {
    signUp (email: String!, password: String!, passwordConfirmation: String!): Email!
    delete (email: String!): Result,
    update (currentEmail: String!, newEmail: String!, newPassword: String!): Email!
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
