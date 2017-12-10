import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import teamType from './Team';
import sectionType from './Section';
import { getTeams } from '../../services/Team';
const RankingType = new GraphQLObjectType({
  name: 'Ranking',
  description: 'Team Type',
  fields: () => ({
    category: {
      type: GraphQLInt,
      description: 'section type, i.e. MONDAY_LADIES'
    },
    ranking: {
      type: GraphQLInt,
      description: 'ID of the Team'
    },
    teams: {
      type: new GraphQLList(teamType),
      description: 'ID of the Team',
      resolve(parent) {
        return getTeams(parent);
      }
    }
  })
});

export default new GraphQLObjectType({
  name: 'Section',
  description: 'Team Type',

  fields: () => ({
    id: {
      type: GraphQLInt,
      description: 'ID of the Team'
    },
    category: {
      type: GraphQLString,
      description: 'section type, i.e. MONDAY_LADIES'
    },
    rankings: {
      type: new GraphQLList(RankingType),
      description: 'section ranking, i.e. MONDAY_LADIES_3',
      resolve({ id }) {
        return [1, 2, 3, 4, 5, 6].map(ranking => ({
          category: id,
          ranking
        }));
      }
    }
  })
});
