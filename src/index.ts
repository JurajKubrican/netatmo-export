import { ApolloServer, IResolvers } from 'apollo-server-micro'
import { config } from 'dotenv'
import { resolve } from 'path'

import { resolvers } from './resolver'
import { schema } from './schema'

try {
  config({ path: resolve(__dirname, "../.env") });
} catch {}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers as IResolvers
});

module.exports = server.createHandler({ path: "/api" });
