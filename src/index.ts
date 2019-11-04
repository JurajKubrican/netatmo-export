import { ApolloServer, IResolvers, ServerInfo } from 'apollo-server'
import { config } from 'dotenv'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import { join, resolve } from 'path'

import { resolvers } from './resolver'

try {
  config({ path: resolve(__dirname, "../.env") });
} catch {}

const typesArray = fileLoader(join(__dirname, "./**/*.graphql"));
export const schema = mergeTypes(typesArray, { all: true });

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers as IResolvers
});

// The `listen` method launches a web server.
server.listen().then(({ url }: ServerInfo) => {
  console.log(`🚀  Server ready at ${url}`);
});
