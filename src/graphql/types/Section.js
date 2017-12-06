import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Section',
  description: 'Team Type',

  fields: () => ({
    id: {
      type: GraphQLString,
      description: 'ID of the Team'
    },
    category: {
      type: GraphQLString,
      description: 'section type, i.e. MONDAY_LADIES'
    },
    ranking: {
      type: GraphQLInt,
      description: 'section ranking, i.e. MONDAY_LADIES_3'
    }
  })
});
