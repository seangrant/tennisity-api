import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Match',
  description: 'Match Type',

  fields: () => ({
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
