import { GraphQLList, GraphQLString, GraphQLNonNull } from 'graphql';
import UserType from '../types/User';
import { getUser } from '../resolvers/User';

export default {
  type: UserType,
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




export const teams {
  type: TeamType
}
