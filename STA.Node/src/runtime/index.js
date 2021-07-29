require("module-alias/register");

const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const path = require("path");
const { GraphQLFileLoader } = require("@graphql-tools/graphql-file-loader");
const { loadSchemaSync } = require("@graphql-tools/load");
const { mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");
const jwt = require("jsonwebtoken");

const resolversArray = loadFilesSync(path.join(__dirname, "./resolvers/*.js"));

const schema = loadSchemaSync("./src/runtime/typedefs/*.graphql", {
  loaders: [new GraphQLFileLoader()],
  resolvers: mergeResolvers(resolversArray),
});

const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    try {
      console.log(process.env.DOCUSIGN_KEY);
      const decoded = jwt.verify(token, "CREATE_JWT_KEY");
      // Add the user to the context
      console.log(decoded);
      return { name: decoded.name };
    } catch (e) {
      return {};
    }
  },
});

server.listen({ port: 3333 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
