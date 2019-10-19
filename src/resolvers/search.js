import { convertObjectKeysToLowerCase } from '../util';

const SearchResolver = async (parent, { name }, { dataSources }, info) => {
  const data = (await dataSources.OmdbAPI.search(name)).Search;
  return data.map(result => convertObjectKeysToLowerCase(result));
};

export default SearchResolver;