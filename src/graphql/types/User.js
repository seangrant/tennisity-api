'use strict';

const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = GraphQL;

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
