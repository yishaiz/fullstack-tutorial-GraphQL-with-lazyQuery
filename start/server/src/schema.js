const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here

  # A book has a title and an author
  type Book {
    title: String
    author: Author
  }
  
  # An author has a name and a list of books
  type Author {
    name: String
    books: [Book]
  }

type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }
  
  type User {
    id: ID!
    email: String!
    trips: [Launch]!
    token: String
  }
  
  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }
  
  enum PatchSize {
    SMALL
    LARGE
  }

    type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
    }

    type Mutation {
        bookTrips(launchIds: [ID]!): TripUpdateResponse!
        cancelTrip(launchId: ID!): TripUpdateResponse!
        login(email: String): User
      }

      type TripUpdateResponse {
        success: Boolean!
        message: String
        launches: [Launch]
      }

      

  `;  
  
module.exports = typeDefs;
