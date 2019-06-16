const { RESTDataSource } = require('apollo-datasource-rest');

class MoviesAPI extends RESTDataSource {
    constructor() {
        super();
        // this.baseURL = 'https://movies-api.example.com/';
    }

    async getAuth(id) {
        return this.get(`auth/${id}`);
    }

    // async getMostViewedMovies(limit = 10) {
    //     const data = await this.get('movies', {
    //         per_page: limit,
    //         order_by: 'most_viewed',
    //     });
    //     return data.results;
    // }
}