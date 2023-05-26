const { ValidationError, UniqueConstraintError } = require("sequelize");
const bcrypt = require("bcrypt");
const { models } = require("../../db/sequelize");
const auth = require("../../auth/auth");

module.exports = (app) => {
  app.put("/api/user/:id", auth, async (req, res) => {
    const { id } = req.params;

    try {
      const user = await models.utilisateur.findByPk(id);
      if (!user) {
        const message = "L'utilisateur demandé n'existe pas";
        return res.status(404).json({ message });
      }

      const { mot_de_passe, ...otherFields } = req.body;

      if (mot_de_passe) {
        const passwordMatch = await bcrypt.compare(
          mot_de_passe,
          user.mot_de_passe
        );
        if (!passwordMatch) {
          const message = "Mot de passe incorrect";
          return res.status(400).json({ message });
        }
      }

      if (Object.keys(otherFields).length === 0) {
        const message = "Aucune donnée à mettre à jour";
        return res.status(400).json({ message });
      }

      await models.utilisateur.update(otherFields, {
        where: { id_utilisateur: id },
      });

      const updatedUser = await models.utilisateur.findByPk(id);
      const message = `L'utilisateur avec l'identifiant n°${updatedUser.id_utilisateur} a été modifié avec succès`;
      return res.status(200).json({ message, data: updatedUser });
    } catch (error) {
      if (
        error instanceof ValidationError ||
        error instanceof UniqueConstraintError
      ) {
        return res.status(400).json({ message: error.message, data: error });
      }
      const message =
        "Une erreur est survenue lors de la modification de l'utilisateur";
      return res.status(500).json({ message, data: error });
    }
  });
};