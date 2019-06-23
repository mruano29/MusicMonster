const { RESTDataSource } = require('apollo-datasource-rest');
const btoa = require('btoa')

class AuthAPI extends RESTDataSource {
    constructor() {
        super();
    }

    willSendRequest(request) {
        const clientId = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET;
        const encodedSecret = btoa(`${clientId}:${clientSecret}`);

        request.headers.set("Content-Type", 'application/x-www-form-urlencoded');
        request.headers.set("Authorization", `Basic ${encodedSecret}`);
    }

    async getAuth() {

        const authURL = "https://accounts.spotify.com/api/token";

        const res = await this.post(authURL, "grant_type=client_credentials");

        return res
    }
}

module.exports = AuthAPI;