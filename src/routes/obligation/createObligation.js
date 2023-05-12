const { ValidationError, UniqueConstraintError } = require("sequelize")
const { models } = require("../../db/sequelize")
const auth = require("../../auth/auth")

module.exports = (app) => {
    app.post('/api/obligation', auth, async (req, res) => {
        try {
            const { titre, description, date_echeance, date_creation, date_maj, id_entite } = req.body

            const newObligation = await models.obligation.create(req.body)

            const message = `L'obligation avec l'identifiant n°${newObligation.id_obligation} a été créée avec succès`
            return res.status(201).json({ message, data: newObligation })
        } catch (error) {
            if (error instanceof ValidationError || error instanceof UniqueConstraintError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = "Une erreur est survenue lors de la création de l'obligation"
            return res.status(500).json({ message, data: error })
        }
    })
}
