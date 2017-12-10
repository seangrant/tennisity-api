import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import SectionType from '../types/Section';
import { getAllSections } from '../../services/Section';

export default {
  type: new GraphQLList(SectionType),
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
  resolve(parent, args, req) {
    return getTeams(args);
  }
};

export const allSections = {
  type: new GraphQLList(SectionType),
  description:
    'This will return the teams for a given category (optional) and ranking (optional)',
  resolve(parent, args, req) {
    return getAllSections();
  }
};
