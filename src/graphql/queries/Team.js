import { GraphQLInt } from 'graphql';

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
  resolve(parent, { id }) {
    return getTeamById(id);
  }
};
