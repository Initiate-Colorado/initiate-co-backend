// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt , GraphQLList } from 'graphql'

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: 'User type',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    thirty_days_from: { type: GraphQLString },
    ballotTitle: { type: GraphQLString },
    ballotDescription: { type: GraphQLString }
  })
})
// User Login type
const UserLoginType = new GraphQLObjectType({
  name: 'userAuth',
  description: 'User Authentication Type',
  fields: () => ({
    user: { type: UserType },
    token: { type: GraphQLString }
  })
})

export { UserType, UserLoginType }
