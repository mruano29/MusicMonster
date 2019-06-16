const { makeExecutableSchema } = require('graphql-tools');
const requireGraphQLFile = require("require-graphql-file");
const loginResolver = require('./login/resolver');
const loginSchema = requireGraphQLFile("./login/schema.graphql");


const schema = makeExecutableSchema({
  typeDefs: loginSchema,
  resolvers: loginResolver
});

module.exports = schema;