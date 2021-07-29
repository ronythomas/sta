const { ApolloServer, gql } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const path = require("path");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { loadSchemaSync } = require("@graphql-tools/load");
const { mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");

const resolversArray = loadFilesSync(path.join(__dirname, "./**/resolvers.js"));

const schema = loadSchemaSync("./**/*.graphql", {
  loaders: [new GraphQLFileLoader()],
  resolvers: mergeResolvers(resolversArray),
});

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen({ port: 3333 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
