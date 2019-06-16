const resolvers = {
  Query: {
    loginQ(parent, args, context, info) {
          return 'hello muchacho querealo';
    }
  },
  Mutation: {
    loginM(parent, args, context, info) {
      return 'hello muchacho mutalo';
    }
  }
};

module.exports = resolvers;