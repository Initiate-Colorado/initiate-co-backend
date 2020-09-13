// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt , GraphQLList } from 'graphql'

// User type
const BallotProcessType = new GraphQLObjectType({
  name: 'ballotProcess',
  description: 'BallotProcess type',
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    dueDate: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  })
})


export { BallotProcessType }
