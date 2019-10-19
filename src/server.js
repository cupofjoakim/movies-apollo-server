import { ApolloServer } from 'apollo-server';
import path from 'path';
import dotenv from 'dotenv';

import typeDefs from './type-definitions';
import resolvers from './resolvers';
import OmdbAPI from './datasources/omdb-api';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: path.resolve(__dirname, '../.env') });
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      OmdbAPI: new OmdbAPI(),
    };
  }
});

server.listen().then(({ url }) => {
  console.log(`🤠✨ Server ready at ${url}`);
});