const { ApolloServer, gql } = require('apollo-server');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./typeDefs');
const server = new ApolloServer({ typeDefs, resolvers });
server.listen({port:1298}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});