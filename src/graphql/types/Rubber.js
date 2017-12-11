import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import sectionType from './Section';
import matchType from './Match';
import { getSection } from '../../services/Section';
import { getScoreForTeam, getMatchesForTeam } from '../../services/Match';

const playerType = {};

const setType = new GraphQLObjectType({
  name: 'Set',
  description: 'Set type',

  fields: () => ({
    homeScore: {
      type: GraphQLInt,
      description: 'Home team game score for Set'
    },
    awayScore: {
      type: GraphQLInt,
      description: 'Away team game score for Set'
    }
  })
});

export default new GraphQLObjectType({
  name: 'Rubber',
  description: 'Rubber Type',

  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'ID of the Rubber'
    },
    homePlayers: {
      type: new GraphQLList(playerType),
      description: 'players in match single or double'
    },
    awayPlayers: {
      type: new GraphQLList(playerType),
      description: 'players in match single or double'
    },
    result: {
      type: new GraphQLList(setType),
      description: 'The sets of the Rubber'
    }
  })
});
