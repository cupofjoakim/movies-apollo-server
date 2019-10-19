import { RESTDataSource } from 'apollo-datasource-rest';

class OmdbAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://www.omdbapi.com/';
    this.apiKey = process.env.OMDB_API_KEY;
  }

  willSendRequest(req) {
    req.params.set('apiKey', this.apiKey);
  }

  async search(name) {
    return this.get(`?s=${name}&type=movie`);
  }

  async getMovie(id) {
    console.log(`Getting movie with id ${id}`);
    return this.get(`?i=${id}`);
  }
}

export default OmdbAPI;