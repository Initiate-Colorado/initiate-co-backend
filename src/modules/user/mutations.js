// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove, updateUserResolver } from './resolvers'
// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}

export const updateUser = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    name: {
      name: 'name',
      type: GraphQLString
    },
    email: {
      name: 'email',
      type: GraphQLString
    },
    // password: {
    //   name: 'password',
    //   type: GraphQLString
    // },
    thirty_days_from: {
      name: 'thirty_days_from',
      type: GraphQLString
    },
    ballotTitle: {
      name: 'ballotTitle',
      type: GraphQLString
    },
    ballotDescription: {
      name: 'ballotDescription',
      type: GraphQLString
    }
  },
  resolve: updateUserResolver
}
