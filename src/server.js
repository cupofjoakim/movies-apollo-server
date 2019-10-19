import { ApolloServer, gql } from 'apollo-server';

const movies = [
  {
    title: "Se7en",
    year: 1997
  },
  {
    title: "Back to the future",
    year: 1986
  }
]

const resolvers = {
  Query: {
    movies: () => movies
  }
}

const typeDefs = gql`
  type Movie {
    title: String,
    year: Int
  }

  type Query {
    movies: [Movie]
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Lets go, space cowboy 🤠✨`);
  console.log(`Server ready at ${url}`);
})