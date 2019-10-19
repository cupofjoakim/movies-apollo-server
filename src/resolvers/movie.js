import { convertObjectKeysToLowerCase } from '../util';

const MovieResolver = async (parent, { id }, { dataSources }, info) => {
  const data = await dataSources.OmdbAPI.getMovie(id);
  const withLowerCasedKeys = convertObjectKeysToLowerCase(data);
  const actors = withLowerCasedKeys.actors
    ? withLowerCasedKeys.actors
      .split(", ")
      .map(name => ({ name }))
    : [];

  return {
    ...withLowerCasedKeys,
    actors,
  }
};

export default MovieResolver;