import { gql } from 'apollo-server';

const typeDefs = gql`
  type Movie {
    imdbid: ID!,
    title: String,
    year: String,
    poster: String,
    released: String,
    runtime: String,
    director: String,
    writer: String,
    actors: [Actor],
    language: String,
    plot: String,
    ratings: [Rating],
  }

  type Actor {
    name: String
  }

  type Rating {
    source: String,
    value: String,
  }

  type Query {
    search(name: String!): [Movie]
    movie(id: ID!): Movie
  }
`;

export default typeDefs;