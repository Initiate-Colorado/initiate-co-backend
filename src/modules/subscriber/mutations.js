// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { SubscriberType } from './types'
import { create , remove} from './resolvers'
// Create
export const subscriberSignup = {
  type: SubscriberType,
  args: {
    email: {
      name: 'email',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
export const subscriberRemove = {
  type: SubscriberType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
