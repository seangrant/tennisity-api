import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import ScheduleType from '../types/Schedule';
import { getSchedule } from '../../services/Schedule';
export default {
  type: ScheduleType,
  description:
    'This will return the schedule for a given category (optional) and ranking (optional)',
  args: {
    category: {
      type: GraphQLString,
      description: 'category'
    },
    ranking: {
      type: GraphQLInt
    }
  },
  resolve(parent, args, req) {
    return getSchedule(args);
  }
};
