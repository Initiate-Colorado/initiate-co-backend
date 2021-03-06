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
    title: {
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
    },
    userId: {
      name: 'userId',
      type: GraphQLInt
    },
    representative: {
      name: 'representative',
      type: GraphQLString
    },
    representativeAddress: {
      name: 'representativeAddress',
      type: GraphQLString
    },
    corepresentative: {
      name: 'corepresentative',
      type: GraphQLString
    },
    corepresentativeAddress: {
      name: 'representativeAddress',
      type: GraphQLString
    },
    ballotNumber: {
      name: 'ballotNumber',
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
    title: {
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
    },
    representative: {
      name: 'representative',
      type: GraphQLString
    },
    representativeAddress: {
      name: 'representativeAddress',
      type: GraphQLString
    },
    corepresentative: {
      name: 'corepresentative',
      type: GraphQLString
    },
    corepresentativeAddress: {
      name: 'representativeAddress',
      type: GraphQLString
    },
    ballotNumber: {
      name: 'ballotNumber',
      type: GraphQLString
    },
    meetUpAddress: {
      name: 'meetUpAddress',
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
