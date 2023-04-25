const { ValidationError } = require("sequelize")
const { models } = require("../../db/sequelize")
const auth = require("../../auth/auth")

module.exports = (app) => {
    app.put('/api/obligation/:id', auth, async (req, res) => {
        const { id } = req.params

        try {
            const obligation = await models.obligation.findByPk(id)
            if (!obligation) {
                const message = "L'obligation demandée n'existe pas"
                return res.status(404).json({ message })
            }

            const { titre, description, date_echeance, date_creation, date_maj, id_entite } = req.body

            if (!titre && !description && !date_echeance && !date_creation && !date_maj && !id_entite) {
                const message = "Aucune donnée à mettre à jour"
                return res.status(400).json({ message })
            }

            await models.obligation.update({ nom, adresse, ville, pays }, { where: { id_obligation: id } })

            const updateObligation = await models.obligation.findByPk(id)
            const message = `L'entité avec l'identifiant n°${updateObligation.id_obligation} a été modifiée avec succès`
            return res.status(200).json({ message, data: updateObligation })

        } catch (error) {
            if (error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error })
            }
            const message = "Une erreur est survenue lors de la modification de l'obligation"
            return res.status(500).json({ message, data: error })
        }
    })
}
