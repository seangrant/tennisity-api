import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Club',
  description: 'Club Type',

  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'Id of Pairing'
    },
    name: {
      type: GraphQLString,
      description: 'Name of club'
    }
  })
});
