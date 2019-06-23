const { RESTDataSource } = require("apollo-datasource-rest");

class SearchAPI extends RESTDataSource {
    constructor() {
        super();
    }

    willSendRequest(request) {
        const BearerCode =
          "BQDj-73gIWFGHct74STvILHhKlddyxfBei-UU1NUdwCHHSXlP4SclzJllOOYvG1izMt13GIQxxJbq18XiBU";
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
