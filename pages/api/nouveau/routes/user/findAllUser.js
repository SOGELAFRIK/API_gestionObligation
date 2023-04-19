const { Op } = require("sequelize")
const { models } = require("../../db/sequelize")


//creation de notre point de terminaison pour recuperer la liste de touts les utilisateurs
module.exports = (app) => {
    app.get('/api/user', (req, res) => {
        //ramène un utilisateur par son nom
        if (req.query.nom) {
            const nom = req.query.nom
            const limit = parseInt(req.query.LIMIT) || 5
            //verifier si le caractère de la recherhce est d'aumoin 2 caractères
            if (nom.length < 2) {
                const message = "La recherche doit contenir au moins 2 caractères"
                return res.status(400).json({ message })
            }
            return models.utilisateur.findAndCountAll({
                where: {
                    nom: {
                        [Op.like]: `%${nom}%`
                    }
                },
                order: ["nom"],
                limit: limit
            })
                .then(({ count, rows }) => {
                    const message = `Il y a ${count} qui correspondent au terme recherche ${nom}`
                    res.json({ message, data: rows })
                })
                .catch(error => {
                    const message = "Une erreur est survenue lors de la récupération de la liste des utilisateurs"
                    res.status(500).json({ message, data: error })
                })
        } else {
            models.utilisateur.findAll({ order: ["id_utilisateur"] })
                .then(user => {
                    const message = `la liste des utilisateurs a été récupérée avec succès`
                    res.json({ message, data: user })
                })
                .catch(error => {
                    const message = "Une erreur est survenue lors de la récupération de la liste des utilisateurs"
                    res.status(500).json({ message, data: error })
                })
        }
    })
}