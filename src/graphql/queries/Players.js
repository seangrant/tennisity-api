import { GraphQLInt, GraphQLList } from 'graphql';

import PlayerType from '../types/Player';
import { getPlayersForTeam } from '../../services/Player';

export default {
  type: new GraphQLList(PlayerType),
  description: 'This will return the Players given the specified team id',
  args: {
    teamId: {
      type: GraphQLInt
    }
  },
  resolve(parent, { teamId }) {
    return getPlayersForTeam(teamId);
  }
};
