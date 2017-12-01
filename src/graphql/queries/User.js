import { GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import PostType from '../types/User';
import { getUser } from '../resolvers/User';

module.exports = {
  index() {
    return {
      type: PostType,
      description: 'This will return the user for a given id',
      args: {
        id: {
          type: GraphQLString,
          description: 'Enter ID of user'
        }
      },
      resolve(parent, args) {
        return getUser(parent, args);
      }
    };
  }
};
