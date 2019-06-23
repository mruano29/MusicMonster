const { makeExecutableSchema, mergeSchemas } = require("graphql-tools");
const requireGraphQLFile = require("require-graphql-file");
const loginResolver = require('./login/resolver');
const loginSchema = requireGraphQLFile("./login/schema.graphql");
const searchResolver = require("./search/resolver");
const searchSchema = requireGraphQLFile("./search/schema.graphql");


const loginExecutableSchema = makeExecutableSchema({
  typeDefs: loginSchema,
  resolvers: loginResolver
});

const searchExecutableSchema = makeExecutableSchema({
  typeDefs: searchSchema,
  resolvers: searchResolver
});

const schema = mergeSchemas({
  schemas: [loginExecutableSchema, searchExecutableSchema]
});

module.exports = schema;