import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';

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
    }
  })
});
