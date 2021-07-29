const path = require("path");
require("module-alias/register");
// only require in local mode. If inside container docker will provide the env vars.
if (process.env.APP_ENV === "local")
  require("dotenv").config({ path: path.resolve(__dirname, `../../../.env`) });

const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
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
      const decoded = jwt.verify(token, process.env.JWT_DECODE_KEY);
      return { name: decoded.name };
    } catch (e) {
      return {};
    }
  },
});

server.listen({ port: 3333 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
