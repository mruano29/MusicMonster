const { RESTDataSource } = require("apollo-datasource-rest");

class SearchAPI extends RESTDataSource {
    constructor() {
        super();
    }

    willSendRequest(request) {
        const BearerCode =
          "BQByggbA8YvbvQypSv8oI1anHvJdmMDvFKvDnQAYL_qi12nBpznKzBkkZ8cLbJDSNby5DjYsBdJPVtkYSxs";
        request.headers.set("Authorization", `Bearer ${BearerCode}`);
    }

    async getData(searchParam) {
        const searchUrl =
            `https://api.spotify.com/v1/search?q=${searchParam}&type=track`; //album,artist,playlist,

        const res = await this.get(searchUrl);

        return res;
    }
}

module.exports = SearchAPI;
