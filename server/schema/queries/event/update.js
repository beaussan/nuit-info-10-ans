import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import eventType from '../../types/event';
import eventInputType from '../../types/event-input';

/**
 * update a post
 * @example
 * mutation {
 *  update(id: 4,
 *  data: {
 *    title: 'foo bar',
 *    content: 'foo bar is the best!'
 *  }) {
 *   id,
 *   title,
 *   content
 *  }
 * };
 */
export default {
  type: eventType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: ²
    }
  },
  resolve (root, params, { ctrl }) {
    return ctrl.event.update(params);
  }
};
