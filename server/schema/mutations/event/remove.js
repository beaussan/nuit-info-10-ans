import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import eventType from '../../types/event';

/**
 * remove a component
 * @example
 * mutation {
 * remove(id: 4) {
 *   id,
 *   title,
 *   content
 * }
 *}
 */
export default {
  type: eventType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve (root, params, { ctrl }) {
    return ctrl.event.remove(params);
  }
};
