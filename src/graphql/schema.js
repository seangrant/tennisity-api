import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// import users from './queries/User';
// import currentUser from './queries/CurrentUser';
import teams from './queries/Teams';
import schedule from './queries/Schedule';
import section, { allSections } from './queries/Section';
import allClubs from './queries/Club';
const query = new GraphQLObjectType({
  name: 'RootQueryType',
  description: 'This is the default root query provided by our application',
  fields: {
    teams,
    schedule,
    section,
    allSections,
    allClubs
  }
});

module.exports = new GraphQLSchema({
  query
  //mutation
});
