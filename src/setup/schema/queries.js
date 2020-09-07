// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as user from '../../modules/user/query'
import * as ballot_process from '../../modules/ballot_process/query'
import * as ballots from '../../modules/ballots/query'
// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',

  fields: () => ({
    ...user,
    ...ballot_process,
    ...ballots
  })
})

export default query
