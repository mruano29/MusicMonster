const resolvers = {
    Query: {
        search: async (parent, args, context, info) => {
            context.token = args.token;
            const res = await context.dataSources.searchAPI.getData(args.search);
            
            return res;
        },
        trackFeatures: async (parent, args, context, info) => {
            context.token = args.token;
            console.log(args.token)
            const res = await context.dataSources.searchAPI.trackFeatures(
              args.trackId
            );

            return res;
        },
    }
};

module.exports = resolvers;
