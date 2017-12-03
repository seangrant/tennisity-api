import { GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import UserType from '../types/User';
import { getUser } from '../resolvers/User';
import { currentUser } from '../../services/User';
console.log('fred', currentUser);
export default {
  type: UserType,
  description:
    'This will return the current user for using current JWT in header',

  resolve(parent, args, req) {
    return currentUser(req);
  }
};
