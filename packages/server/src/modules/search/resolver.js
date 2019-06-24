const resolvers = {
    Query: {
        search: async (parent, args, context, info) => {
            context.token = args.token;
            const res = await context.dataSources.searchAPI.getData(args.search);
            
            return res;
        }
    }
};

module.exports = resolvers;
