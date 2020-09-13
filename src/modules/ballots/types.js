// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt , GraphQLList } from 'graphql'
import { UserType } from  '../user/types'
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
    userId: { type: GraphQLInt },
    user: { type: UserType},
    corepresentative: { type: GraphQLString },
    ballotNumber: { type: GraphQLInt },
    meetUpAddress: { type: GraphQLString }
  })
})


export { BallotType }
