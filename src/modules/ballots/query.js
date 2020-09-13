// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

//App Imports
import { BallotType } from './types'
import { getById, getAll} from './resolvers'

// By ID
export const ballot = {
  type: BallotType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}


// Get All
export const ballots = {
  type: new GraphQLList(BallotType),
  resolve: getAll
}
