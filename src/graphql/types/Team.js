import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';

import sectionType from './Section';

import { getSection } from '../../services/Section';

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
        console.log({ parent });
        return getSection(parent.category);
        //return getSection(parent.)
      }
    },
    score: {
      type: GraphQLInt,
      description: 'current score for team'
    }
  })
});
