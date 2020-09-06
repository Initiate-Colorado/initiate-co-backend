// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt , GraphQLList } from 'graphql'

// User type
const SubscriberType = new GraphQLObjectType({
  name: 'subscriber',
  description: 'Subscriber type',
  fields: () => ({
    email: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  })
})


export { SubscriberType }
