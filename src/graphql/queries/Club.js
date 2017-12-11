import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import ClubType from '../types/Club';
import { getAllClubs } from '../../services/Club';

export default {
  type: new GraphQLList(ClubType),
  description:
    'This will return the teams for a given category (optional) and ranking (optional)',
  args: {
    limit: {
      type: GraphQLInt,
      description: 'category'
    },
    startsWith: {
      type: GraphQLString
    }
  },
  resolve(parent, args, req) {
    return getAllClubs(args);
  }
};
