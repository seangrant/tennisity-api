import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import TeamType from '../types/Team';
import { getTeamById } from '../../services/Team';

export default {
  type: TeamType,
  description: 'This will return the Team with the specified id',
  args: {
    id: {
      type: GraphQLInt
    }
  },
  resolve(parent, args, req) {
    return getTeamById(args.id);
  }
};
