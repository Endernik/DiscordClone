import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID
    email: String
    password: String
    name: String
    hostedServers: [Server]
    joinedServers: [Server]
  }

  type Query {
    users: [User!]
    onlineUsers(serverId: ID!): [User]
    user(id: ID!): User
    me: User
    usersByName(name: String!): [User]
  }

  type Mutation {
    editName(userId: ID!, name: String!): User!
    logOut: User
    deleteUser(id: ID!): User
  }

  type Subscription {
    userLoggedIn: User
    userLoggedOut: User
  }
`