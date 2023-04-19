const { ValidationError, UniqueConstraintError } = require("sequelize");
const { models } = require("../../db/sequelize");
const bcrypt = require("bcrypt");
const auth = require("../../auth/auth")

module.exports = (app) => {
    app.post('/api/user', auth, async (req, res) => {
        try {
            // Cryptage du mot de passe
            const hashedPassword = await bcrypt.hash(req.body.mot_de_passe, 10);

            // Création de l'utilisateur en base de données avec le mot de passe crypté
            const user = await models.utilisateur.create({
                nom: req.body.nom,
                email: req.body.email,
                mot_de_passe: hashedPassword,
                id_entite: req.body.id_entite,
                role_id: req.body.role_id
            });

            const message = `L'utilisateur ${req.body.nom} a été créé avec succès`;
            console.log(user.toJSON());
            res.status(201).json({ message, data: user });
        } catch (error) {
            if (error instanceof ValidationError) {
                res.status(400).json({ message: error, data: error });
            }
            if (error instanceof UniqueConstraintError) {
                res.status(400).json({ message: error, data: error });
            }
            const message = `L'utilisateur ${req.body.nom} n'a pas été créé avec succès`;
            res.status(500).json({ message, data: error });
        }
    });
};
