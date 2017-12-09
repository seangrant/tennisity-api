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
      resolve(parent, args) {
        return getSection(parent.category);
      }
    },
    score: {
      type: GraphQLInt,
      description: 'current score for team',
      resolve(parent, args) {
        return getScoreForTeam(parent.id);
      }
    },
    matches: {
      type: new GraphQLList(matchType),
      description: 'Matches for this team',
      resolve(parent, args) {
        return getMatchesForTeam(parent.id);
      }
    }
  })
});
