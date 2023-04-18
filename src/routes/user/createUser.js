const { ValidationError, UniqueConstraintError } = require("sequelize")
const { models } = require("../../db/sequelize")

//point de terminaison pour la création d'un utilisateur
module.exports = (app) => {
    app.post('/api/user', (req, res) => {
        models.utilisateur.create(req.body)
            .then((user) => {
                const message = `L-utilisateur ${req.body.nom} a été crée avec succès`
                res.status(201).json({ message, data: user })
            })
            .catch((error) => {
                if (error instanceof ValidationError) {
                    res.status(400).json({ message: error, data: error })
                }
                if (error instanceof UniqueConstraintError) {
                    res.status(400).json({ message: error, data: error })
                }
                const message = `L'utilisateur ${req.body.nom} n'a pas été créé avec succès`
                res.status(500).json({ message, data: error })
            })
    })
}