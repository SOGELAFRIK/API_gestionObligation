const { ValidationError, UniqueConstraintError } = require("sequelize")
const { models } = require("../../db/sequelize")

//point de termison pour modifier un utilisateur a partir de son id
module.exports = (app) => {
    app.put('/api/user/:id', (req, res) => {
        const { id } = req.params
        models.utilisateur.update(req.body, { where: { id_utilisateur: id } })
            .then(() => {
                return models.utilisateur.findByPk(id).then(user => {
                    if (user === null) {
                        const message = "L'utilisateur demandé n'existe pas"
                        res.status(404).json({ message })
                    }
                    const message = `L'utilisateur avec l'identifiant n°${user.id_utilisateur} a été modifié avec succès`
                    res.status(200).json({ message, data: user })
                })
            })
            .catch(error => {
                if (error instanceof ValidationError) {
                    res.status(400).json({ message: error.message, data: error })
                }
                if (error instanceof UniqueConstraintError) {
                    res.status(400).json({ message: error.message, data: error })
                }
                const message = "Une erreur est survenue lors de la modification de l'utilisateur"
                res.status(500).json({ message, data: error })
            })
    })
}