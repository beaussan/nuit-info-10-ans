import Event from '../models/event.model';


function load(params) {
  return Event.get(params.id);
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

function create(params) {
  const post = new Event({
    nom: params.data.nom,
    date: params.data.date,
    ville: params.data.ville,
    codeP: params.data.codeP,
    numero: params.data.numero,
    rue: params.data.rue,
    detail: params.data.detail,
    description: params.data.description,
    latt: params.data.latt,
    long: params.data.long,
    id_maps: params.data.id_maps,
    content: params.data.content
  });
  return post.save();
}

function update(params) {
  return load(params).then(post => {
    const tmp = post;
    post.nom = params.data.nom;
    post.date = params.data.date;
    post.ville = params.data.ville;
    post.codeP = params.data.codeP;
    post.numero = params.data.numero;
    post.rue = params.data.rue;
    post.detail = params.data.detail;
    post.description = params.data.description;
    post.latt = params.data.latt;
    post.long = params.data.long;
    post.id_maps = params.data.id_maps;
    post.content = params.data.content;
    return post.save()
  });
}

function list(params) {
  const { limit = 50, skip = 0 } = params;
  return Event.list({ limit, skip })
}

function remove(params) {
  return load(params).then(post => post.remove());
}

export default { load, get, create, update, list, remove };
