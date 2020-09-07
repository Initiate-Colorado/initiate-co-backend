// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

//App Imports
import { BallotProcessType } from './types'
import { getById } from './resolvers'

// By ID
export const ballotProcess = {
  type: BallotProcessType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
