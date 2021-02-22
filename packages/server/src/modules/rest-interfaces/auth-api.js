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

    async getAccessToken() {

        const authURL = "https://accounts.spotify.com/api/token";

        const res = await this.post(authURL, "grant_type=client_credentials");

        return res
    }

    async getAuthentication() {

        const clientId = process.env.CLIENT_ID;

        const authURL = `https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09`;
        // const authURL = `https://accounts.spotify.com/api/authorize?client_id=${clientId}&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email%20streaming&state=34fFs29kd09`;

        const res = await this.get(authURL);
        console.log("res de aqui", res)
        return res
    }
}

module.exports = AuthAPI;
