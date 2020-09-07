// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { BallotType } from './types'
import { create, update, deleteBallot } from './resolvers'


//Create
export const ballotCreate = {
  type: BallotType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    type: {
      name: 'title',
      type: GraphQLString
    },
    description: {
      name: 'description',
      type: GraphQLString
    },
    subject: {
      name: 'subject',
      type: GraphQLString
    }
  },
  resolve: create
}

// Update
export const ballotUpdate = {
  type: BallotType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    type: {
      name: 'title',
      type: GraphQLString
    },
    description: {
      name: 'description',
      type: GraphQLString
    },
    subject: {
      name: 'subject',
      type: GraphQLString
    }
  },
  resolve: update
}

// Delete
export const ballotDelete = {
  type: BallotType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: deleteBallot
}
