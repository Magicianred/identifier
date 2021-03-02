import { gql } from 'apollo-server-express'

export default gql`
  extend type Query {
    search (email: String!): User!
    # users: User[]!
    login (email: String!, password: String!): Account!
  }

  extend type Mutation {
    signUp (email: String!, password: String!, passwordConfirmation: String!): Email!
    delete (email: String!): Result
    update (email: String): Email!
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
    result: Boolean
  }
`
