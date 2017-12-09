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
      type: GraphQLInt,
      description: 'code for club'
    },
    code: {
      type: GraphQLString,
      description: 'code for club'
    },
    name: {
      type: GraphQLString,
      description: 'Name of club'
    },
    address1: {
      type: GraphQLString,
      description: 'Name of club'
    },
    contact: {
      type: GraphQLString,
      description: 'Name of club'
    },
    Phone: {
      type: GraphQLString,
      description: 'Name of club'
    },
    address2: {
      type: GraphQLString,
      description: 'Name of club'
    },
    contactPhone: {
      type: GraphQLString,
      description: 'Name of club'
    }
  })
});
