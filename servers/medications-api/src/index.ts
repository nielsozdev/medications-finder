import http from 'http'
import { readFileSync } from 'node:fs'

import { ApolloServer } from '@apollo/server'
import { ApolloServerErrorCode } from '@apollo/server/errors'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'

// import { connectDB, disconnectDB } from '@noz/medications-core/src/mongoose/utils'
import { connectDB, disconnectDB } from '~/adapters/connection'

// import { type NormalizeData } from './generated/graphql'
import { resolvers } from './resolvers'

const typeDefs = readFileSync('./src/schemas/schema.graphql', 'utf-8')

interface MyContext {
  // medication: NormalizeData
  // medications: NormalizeData[]
  token?: string
};

(async function () {
  const app = express()
  await connectDB()
  const httpServer = http.createServer(app)

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })
  // Ensure we wait for our server to start
  await server.start()

  app.use(
    '/',
    cors<cors.CorsRequest>({ origin: ['http://localhost:4000', 'http://localhost:3000', 'https://studio.apollographql.com'] }),
    express.json(),
    expressMiddleware(server)
  )

  app.use((error, req, res, next) => {
    if (error.extensions?.code === ApolloServerErrorCode.GRAPHQL_PARSE_FAILED) {
      console.log('syntax error', error)
      // respond to the syntax error
    } else if (error.extensions?.code === 'MY_CUSTOM_CODE') {
      // do something else
      console.log('error', error)
    }

    next()
  })

  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve))
  console.log('🚀 Server ready at http://localhost:4000/')

  process.on('SIGINT', async () => {
    await disconnectDB()
    console.log('Disconnecting from MongoDB...')
    process.exit(0)
  })

  process.on('SIGTERM', async () => {
    await disconnectDB()
    console.log('Disconnecting from MongoDB...')
    process.exit(0)
  })
})()
