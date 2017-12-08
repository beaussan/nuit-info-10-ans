import Event from '../models/event.model';

let load = (req, res, next, id) => {
  Event.get(id)
    .then((event) => {
      req.event = event;
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get event
 * @returns {Event}
 */

let get = (req, res) => {
  return res.json(req.event)
};

/**
 * Create new event
 */

let create = (req, res, next){
  const event = new Event({
    id: req.id,
    nom: req.nom,
    date: req.date,
    lieu: req.lieu || {},
    description: req.description
  });
}

