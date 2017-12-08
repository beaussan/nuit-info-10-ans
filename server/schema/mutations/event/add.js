
import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';


import eventInputType from '../../types/event-input';


/**
 * query for a single post
 */
export default {
  type: GraphQLBoolean,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(eventInputType)
    }
  },
  resolve (root, params, { ctrl }) {
    return ctrl.event.create(params);
  }
};

