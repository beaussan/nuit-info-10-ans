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
  lieu: {
    ville: String,
    codeP: String,
    numero: number,
    rue: String,
    detail: String
  },
  description: {
    type: String,
    default: ''
  }
  latt: number,
  long: number,
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
        const err = new APIError('No such user exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  }
};

export default mongoose.model('Event', EventSchema);
