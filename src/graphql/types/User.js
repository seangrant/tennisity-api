import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'User',
  description: 'User Type',

  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'ID of the User'
    },
    name: {
      type: GraphQLString,
      description: 'Name of the user'
    },
    email: {
      type: GraphQLString,
      description: 'Email of the user'
    }
  })
});
