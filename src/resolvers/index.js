import SearchResolver from './search';
import MovieResolver from './movie';

const resolvers = {
  Query: {
    search: SearchResolver,
    movie: MovieResolver
  }
}

export default resolvers;