// You do not need to touch this file.
export const typeDefs = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    emailAddress: String!
    phoneNumber: String!
    source: DataSource!
  }

  enum DataSource {
    DATA_SOURCE_1
    DATA_SOURCE_2
  }

  type Query {
    getUsers: [User!]!
    getUserById(id: ID!): User
  }
`;
