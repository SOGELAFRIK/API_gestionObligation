//point de terminaison pour suprimer un user a partir de son id

const { models } = require("../../db/sequelize")

module.exports = (app) => {
    app.delete('/api/user/:id', (req, res) => {
        models.utilisateur.findByPk(req.params.id)
            .then(user => {
                const userDeleted = user
                return models.utilisateur.destroy({ where: { id_utilisateur: user.id_utilisateur } })
                    .then(() => {
                        if (userDeleted === null) {
                            const message = "L'utilisateur demandé n'existe pas"
                            res.status(404).json({ message })
                        }
                        const message = `L'utilisateur avec l'identifiant n°${userDeleted.id_utilisateur} a été supprimé avec succès`
                        res.status(200).json({ message, data: userDeleted})
                    })
                    .catch(error => {
                        const message = "Une erreur est survenue lors de la suppression de l'utilisateur"
                        res.status(500).json({ message, data: error })
                    })

            })
    })
}