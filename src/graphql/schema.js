import { GraphQLObjectType, GraphQLSchema } from 'graphql';

import team from './queries/Team';
import teams from './queries/Teams';
import schedule from './queries/Schedule';
import section, { allSections } from './queries/Section';
import allClubs from './queries/Club';
import match from './queries/Match';
import teamPlayers from './queries/Players';
import mutation from './mutations/createTeam';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    team,
    teams,
    schedule,
    section,
    allSections,
    allClubs,
    match,
    teamPlayers
  }
});

module.exports = new GraphQLSchema({
  query,
  mutation
});
