const { models } = require("../../db/sequelize");
const auth = require("../../auth/auth");
const getUserRole = require("../../auth/getUserRole");

module.exports = (app) => {
  app.post("/api/suivi_obligation", auth(1, getUserRole), async (req, res) => {
    try {
      const suiviObligation = await models.suivi_obligation.create(req.body);

      const message = "Le suivi d'obligation a été créé avec succès";
      return res.status(201).json({ message, data: suiviObligation });
    } catch (error) {
      const message =
        "Une erreur est survenue lors de la création du suivi d'obligation";
      return res.status(500).json({ message, data: error });
    }
  });
};
