import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
} from 'graphql';

import eventType from '../../types/event';


/**
 * query for a single post
 */
export default {
  type: eventType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
  },
  resolve (root, params, { ctrl }) {
    return ctrl.event.load(params)
  }
};
