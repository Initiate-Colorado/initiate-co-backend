// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

//App Imports
import { BallotType } from './types'
import { getById } from './resolvers'

// By ID
export const ballots = {
  type: BallotType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}
