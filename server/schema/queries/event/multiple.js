import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLInt,
} from 'graphql';

import eventType from '../../types/event';


/**
 * query for a single post
 */
export default {
  type: new GraphQLList(eventType),
  args: {
    limit: {
      name: 'limit',
      type: GraphQLInt
    },
    skip: {
      name: 'skip',
      type: GraphQLInt
    }
  },
  resolve (root, params, { ctrl }) {
    return ctrl.event.list(params)
  }
};
