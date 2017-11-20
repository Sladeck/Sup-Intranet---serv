const Collaborateur = require('./Collaborateur.model')

module.exports = {
  findAll : (req, res) => {
    Collaborateur.find({})
       .exec()
       .then(collaborateurs => {
         if(collaborateurs === null)
                return res.status(500).json({'error': 1, message: 'Aucun collaborateurs trouvé'})
         res.json(collaborateurs)
    })
    .catch(err => res.status(500).json({'err': 1, message: err.message}))
  },

  findOne : (req, res) => {
    Collaborateur.findOne({})
        .exec()
        .then(collaborateurs => {
          res.json(collaborateurs)
        })
  },

  findById: (req, res) => {
    Collaborateur.findById(req.params.id)
      .exec()
      .then(collaborateurs => {
        if(collaborateurs === null)
               return res.status(500).json({'error': 1, message: 'Aucun collaborateur trouvé'})
        res.json(collaborateurs)
      })
      .catch(err => res.status(500).json({'err': 1, message: err.message}))
  },

  create: (req, res) => {
    Collaborateur.create(req.body)
      .then(collaborateur => res.json({success: 1, message: 'Collaborateur créé', inserted: collaborateur}))
      .catch(err => res.status(500).json({error: 1, message: err.message}))
  },

  update: (req, res) => {
    Collaborateur.findByIdAndUpdate(req.params.id, req.body)
      .exec()
      .then(collaborateur => {
        if(collaborateur === null)
               return res.status(500).json({'error': 1, message: 'Aucun collaborateur trouvé'})
        res.json({success: 1, message: 'Collaborateur modifié'})
      })
      .catch(err => res.status(500).json({error: 1, message: err.message}))
  },

  remove: (req, res) => {
    Collaborateur.findByIdAndRemove(req.params.id)
      .exec()
      .then(collaborateur => res.json({success: 1, message: 'Collaborateur supprimé'}))
      .catch(err => res.status(500).json({error: 1, message: err.message}))
  }
}
