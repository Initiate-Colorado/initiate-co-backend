// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports


// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({

  })
})

export default query
