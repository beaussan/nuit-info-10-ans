import {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLInputObjectType,
} from 'graphql';


/**
 * GraphQL post input definition
 */
export default new GraphQLInputObjectType({
  name: 'PostInput',
  fields: () => ({
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
