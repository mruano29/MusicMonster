const resolvers = {
  Query: {
    authToken: async (parent, args, context, info) => {
      const res = await context.dataSources.authAPI.getAuth();
      console.log("authToken res", res.access_token);
      context.token = res.access_token;
      return res;
    }
  },
  Mutation: {
    loginM(parent, args, context, info) {
      console.log("loginM context.token", context.token);
      return context.token;
    }
  }
};

module.exports = resolvers;
