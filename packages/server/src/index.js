const express = require('express');
const { ApolloServer, gql } = require("apollo-server-express");
const AuthAPI = require('./modules/rest-interfaces/auth-api');
const schema = require('./modules/schemas');

const server = new ApolloServer({
    schema,
    dataSources: () => {
        return {
            authAPI: new AuthAPI()
        };
    }
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);