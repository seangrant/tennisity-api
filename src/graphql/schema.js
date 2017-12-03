import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import users from './queries/User';
import currentUser from './queries/CurrentUser';
import mutation from './mutations';
const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    users,
    currentUser
  }
});

module.exports = new GraphQLSchema({
  query,
  mutation
});
