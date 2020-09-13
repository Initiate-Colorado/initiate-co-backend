// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { BallotProcessType } from './types'
import { create, update } from './resolvers'

//Create
export const ballotProcessCreate = {
  type: BallotProcessType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    title: {
      name: 'title',
      type: GraphQLString
    },
    dueDate: {
      name: 'dueDate',
      type: GraphQLString
    },
    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: create
}

// update
export const ballotProcessUpdate = {
  type: BallotProcessType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    title: {
      name: 'title',
      type: GraphQLString
    },
    dueDate: {
      name: 'dueDate',
      type: GraphQLString
    },
    description: {
      name: 'description',
      type: GraphQLString
    }
  },
  resolve: update
}
