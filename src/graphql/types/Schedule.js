import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import TeamType from './Team';
import ClubType from './Club';

const ParingType = new GraphQLObjectType({
  name: 'Pairing',
  description: 'Pairing Type',

  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Id of Pairing'
    },
    HomeTeam: {
      type: TeamType,
      description: 'Home team'
    },
    AwayTeam: {
      type: TeamType,
      description: 'Home team'
    },
    Club: {
      type: ClubType,
      description: 'Club match is being played'
    }
  })
});

const RoundType = new GraphQLObjectType({
  name: 'Round',
  description: 'Round Type',

  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Id of Schedule'
    },
    pairings: {
      type: new GraphQLList(ParingType),
      description: 'section ranking, i.e. MONDAY_LADIES_3'
    }
  })
});

export default new GraphQLObjectType({
  name: 'Schedule',
  description: 'Schedule Type',

  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Id of Schedule'
    },
    description: {
      type: GraphQLString,
      description: '8 or 6 team section'
    },
    category: {
      type: GraphQLString,
      description: 'current category for schedule'
    },
    ranking: {
      type: GraphQLInt,
      description: 'current schedule'
    },
    rounds: {
      type: new GraphQLList(RoundType),
      description: 'section ranking, i.e. MONDAY_LADIES_3',
      resolve(parent, args, a, b) {
        console.log({ args, parent });
        return [];
      }
    }
  })
});

// [
//   {
//     round: 1,
//     pairings: [
//       { team1: 1, team2: 2 },
//       { team1: 3, team2: 4 },
//       { team1: 5, team2: 6 }
//     ]
//   },
//   { round: 2 }
// ];
