// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt , GraphQLList } from 'graphql'

// User type
const BallotType = new GraphQLObjectType({
  name: 'ballotType',
  description: 'Ballot type',
  fields: () => ({
    id: { type: GraphQLInt },
    type: { type: GraphQLString },
    subject: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  })
})


export { BallotType }
