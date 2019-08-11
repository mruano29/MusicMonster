const { msToMS } = require('../../utils/utils');
const contants = require('../../utils/constants');

const resolvers = {
    Query: {
        search: async (parent, args, context, info) => {
            context.token = args.token;
            const res = await context.dataSources.searchAPI.getData(args.search);
            
            return res;
        },
        trackFeatures: async (parent, args, context, info) => {
            context.token = args.token;
            const res = await context.dataSources.searchAPI.trackFeatures(
              args.trackId
            );

            return {
                ...res,
                duration: msToMS(res.duration_ms),
                key: contants.KEY[res.key],
                mode: contants.MODE[res.mode]

            };
        },
    }
};

module.exports = resolvers;
