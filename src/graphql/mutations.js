import { GraphQLObjectType, GraphQLString } from 'graphql';
import CognitoExpress from 'cognito-express';
import UserType from './types/User';
import { signupUser } from '../services/User';

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        name: { type: GraphQLString }
      },
      resolve(parent, args, req) {
        signupUser({ args, req });
      }
    }
  }
});
