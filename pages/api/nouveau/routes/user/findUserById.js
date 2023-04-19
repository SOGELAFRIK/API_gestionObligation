const { models } = require("../../db/sequelize")

//point de terminason pour rechercher un utilisateur par son id
module.exports = (app) => {
    app.get('/api/user/:id', (req, res) => {
        const { id } = req.params
        models.utilisateur.findByPk(id)
            .then(user => {
                if (user === null) {
                    const message = "L'utilisateur demandé n'existe pas"
                    res.status(404).json({ message })
                } else {
                    const message = `L'article avec l'identifiant n°${user.id_utilisateur} a été trouvé avec succès`
                    res.status(200).json({ message, data: article })
                }
            })
            .catch(error => {
                const message = "Une erreur est survenue lors de la récupération de l'utilisateur"
                res.status(500).json({ message, data: error })
            })
    })
}