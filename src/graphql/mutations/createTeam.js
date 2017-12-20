import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import TeamType from '../types/Team';
import { createTeam } from '../../services/Team';

const PlayerInputType = new GraphQLInputObjectType({
  name: 'PlayerInput',
  fields: () => ({
    position: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) }
  })
});

const TeamInputType = new GraphQLInputObjectType({
  name: 'TeamInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    club: { type: new GraphQLNonNull(GraphQLInt) },
    players: { type: new GraphQLList(PlayerInputType) }
  })
});

export default new GraphQLObjectType({
  name: 'mutation',

  description: 'This will create and return a new team',
  fields: () => ({
    createTeam: {
      type: TeamType,
      args: {
        input: { type: new GraphQLNonNull(TeamInputType) }
      },
      resolve(parent, { input }) {
        return createTeam(input);
      }
    }
  })
});
