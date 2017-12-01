import { GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import PostType from '../types/User';
import { getUser } from '../resolvers/User';

export default {
  type: PostType,
  description: 'This will return the user for a given id',
  args: {
    id: {
      type: GraphQLString,
      description: 'Enter ID of user'
    }
  },
  resolve(parent, args) {
    console.log('@@@@@@@@@');
    return getUser(parent, args);
  }
};
