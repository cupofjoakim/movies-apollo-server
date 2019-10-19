import { convertObjectKeysToLowerCase } from '../util';

const SearchResolver = async (parent, { name }, { dataSources }, info) => {
  const { Search: searchResults, Error: error } = await dataSources.OmdbAPI.search(name);

  /*
    Error-handling is left up to graphql, unless it's just an empty result.
    This makes the client side more fault tolerant, as an empty array can still be iterated over.
    Length check to display empty states will still be needed, however.

    IMO, this is bad design from OMDB - it should be implemented from their side.
    A search is a search, if there's no result I would argue that it doesn't classify as an error.
  */
  if (error === 'Movie not found!' || searchResults.length === 0) {
    return [];
  }

  return searchResults.map(result => convertObjectKeysToLowerCase(result));
};

export default SearchResolver;