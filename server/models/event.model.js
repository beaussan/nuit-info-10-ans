import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status'
import APIError from '../helpers/APIError'

/**
 * Event Schema
 */
const EventSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  ville: String,
  codeP: String,
  numero: Number,
  rue: String,
  detail: String,
  description: {
    type: String,
    default: ''
  },
  latt: Number,
  long: Number,
  id_maps: String
});

/**
 * Methods
 */
EventSchema.method({
});

/**
 *  Statics
 */

EventSchema.statics = {

  get(id) {
    return this.findById(id)
      .exec()
      .then((user) => {
        if(user) {
          return user;
        }
        const err = new APIError('No such event exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List posts in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of posts to be skipped.
   * @param {number} limit - Limit number of posts to be returned.
   * @returns {Promise<Event[]>}
   */
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

export default mongoose.model('Event', EventSchema);
