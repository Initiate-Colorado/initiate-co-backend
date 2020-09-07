// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/mutations'
import * as subscribers from '../../modules/subscriber/mutations'
import * as ballot_process from '../../modules/ballot_process/mutations'
import * as ballots from '../../modules/ballots/mutations'
// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...user,
    ...subscribers,
    ...ballot_process,
    ...ballots
  }
})

export default mutation
