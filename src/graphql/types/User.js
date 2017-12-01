'use strict';

const GraphQL = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = GraphQL;

const PostType = new GraphQL.GraphQLObjectType({
  name: 'Post',
  description: 'Post Type, For all the posts present in Reddit.',

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

module.exports = PostType;
