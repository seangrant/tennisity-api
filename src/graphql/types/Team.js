import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import sectionType from './Section';
import matchType from './Match';
import clubType from './Club';
import playerType from './Player';
import { getSection } from '../../services/Section';
import { getScoreForTeam, getMatchesForTeam } from '../../services/Match';
import { getClubById } from '../../services/Club';
import { getPlayersForTeam } from '../../services/Player';

export default new GraphQLObjectType({
  name: 'Team',
  description: 'Team Type',

  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'ID of the Team'
    },
    name: {
      type: GraphQLString,
      description: 'Name of the Team'
    },
    scheduleNumber: {
      type: GraphQLInt,
      description: 'schedule number within current season'
    },
    section: {
      type: sectionType,
      description: 'team`s current section',
      resolve({ category }) {
        return getSection(category);
      }
    },
    score: {
      type: GraphQLInt,
      description: 'current score for team',
      resolve({ id }) {
        return getScoreForTeam(id);
      }
    },
    matches: {
      type: new GraphQLList(matchType),
      description: 'Matches for this team',
      resolve({ id }) {
        return getMatchesForTeam(id);
      }
    },
    club: {
      type: clubType,
      description: 'The club this team belongs to',
      resolve({ club }) {
        return getClubById(club);
      }
    },
    players: {
      type: new GraphQLList(playerType),
      description: 'Players for team',
      resolve({ id }) {
        return getPlayersForTeam(id);
      }
    }
  })
});
