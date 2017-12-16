import { GraphQLInt, GraphQLList } from 'graphql';

import TeamType from '../types/Team';
import { getTeams } from '../../services/Team';

export default {
  type: new GraphQLList(TeamType),
  description:
    'This will return the teams for a given category (optional) and ranking (optional)',
  args: {
    category: {
      type: GraphQLInt,
      description: 'category'
    },
    ranking: {
      type: GraphQLInt
    }
  },
  resolve(parent, args) {
    return getTeams(args);
  }
};
