import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLFloat,
} from 'graphql';

/**
 * GraphQL type definition for post
 */
export default new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    nom: {
      type: new GraphQLNonNull(GraphQLString)
    },
    date: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    ville: {
      type: GraphQLString
    },
    numero: {
      type: GraphQLInt
    },
    codeP: {
      type: GraphQLString
    },
    rue: {
      type: GraphQLString
    },
    latt: {
      type: GraphQLFloat
    },
    long: {
      type: GraphQLFloat
    },
    id_maps: {
      type: GraphQLString
    }

  })
});
