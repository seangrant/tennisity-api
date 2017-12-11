import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import matchType from '../types/Match';
import { getMatchById } from '../../services/Match';

export default {
  type: matchType,
  description: 'This will return a specific match',
  args: {
    id: {
      type: GraphQLInt,
      description: 'The match id'
    }
  },
  resolve(parent, args, req) {
    return getMatchById(args.id);
  }
};
