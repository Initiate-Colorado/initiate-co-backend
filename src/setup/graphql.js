// Imports
import graphqlHTTP from 'express-graphql'
import { NODE_ENV } from '../config/env'
// App Imports
import serverConfig from '../config/server.json'
import schema from './schema'

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')
  let graphqlConfig = {
    schema,
    graphiql: serverConfig.graphql.ide,
    pretty: serverConfig.graphql.pretty,
    // context: {
    //   auth: {
    //     user: request.user,
    //     isAuthenticated: request.user && request.user.id > 0
    //   }
    // }
  }
  if(NODE_ENV == 'production'){
    delete graphqlConfig.graphiql
  }
  // API (GraphQL on route `/`)
  server.use(serverConfig.graphql.endpoint, graphqlHTTP(request => ({
    context: {
      auth: {
        user: request.user,
        isAuthenticated: request.user && request.user.id > 0
      }
    },
    ...graphqlConfig
  })))
}
