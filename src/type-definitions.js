import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    imdbid: ID!,
    title: String,
    year: String,
    poster: String
  }

  type Query {
    search(name: String!): [Movie]
    movie(id: ID!): Movie
  }
`;

export default typeDefs;