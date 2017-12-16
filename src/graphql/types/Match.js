import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import teamType from './Team';
import clubType from './Club';
import rubberType from './Rubber';
import { getTeamById } from '../../services/Team';
import { getClubById } from '../../services/Club';
import { getRubbersById } from '../../services/Rubber';

export default new GraphQLObjectType({
  name: 'Match',
  description: 'Match Type',

  fields: () => ({
    category: {
      type: GraphQLString,
      description: 'section type, i.e. MONDAY_LADIES'
    },
    ranking: {
      type: GraphQLInt,
      description: 'section ranking, i.e. MONDAY_LADIES_3'
    },
    homeTeam: {
      type: teamType,
      description: 'The Home team',
      resolve(parent, args) {
        return getTeamById(parent.homeTeamId);
      }
    },
    homeTeamScore: {
      type: GraphQLInt,
      description: 'The score of the home team for this match'
    },
    awayTeam: {
      type: teamType,
      description: 'The away team',
      resolve(parent, args) {
        return getTeamById(parent.awayTeamId);
      }
    },
    awayTeamScore: {
      type: GraphQLInt,
      description: 'The score of the away team for this match'
    },
    round: {
      type: GraphQLInt,
      description: 'The round the match is played'
    },
    club: {
      type: clubType,
      description: 'The club the match is being played',
      resolve({ club }, args) {
        return getClubById(club);
      }
    },
    rubbers: {
      type: new GraphQLList(rubberType),
      description: 'The rubbers played for this match',
      resolve({ rubbers }) {
        return getRubbersById(rubbers);
      }
    }
  })
});
