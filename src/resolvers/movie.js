import { convertObjectKeysToLowerCase } from '../util';

const MoviesResolver = async (parent, { id }, { dataSources }, info) => {
  const data = await dataSources.OmdbAPI.getMovie(id);
  return convertObjectKeysToLowerCase(data);
};

export default MoviesResolver;