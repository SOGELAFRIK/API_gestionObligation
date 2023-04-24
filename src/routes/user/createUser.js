const { ValidationError, UniqueConstraintError } = require("sequelize");
const { models } = require("../../db/sequelize");
const bcrypt = require("bcrypt");
const auth = require("../../auth/auth");

const createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.mot_de_passe, 10);
        const user = await models.utilisateur.create({
            nom: req.body.nom,
            email: req.body.email,
            mot_de_passe: hashedPassword,
            id_entite: req.body.id_entite,
            role_id: req.body.role_id,
        });
        const message = `L'utilisateur ${req.body.nom} a été créé avec succès`;
        console.log(user.toJSON());
        res.status(201).json({ message, data: user });
    } catch (error) {
        if (error instanceof ValidationError || error instanceof UniqueConstraintError) {
            res.status(400).json({ message: error.message, data: error });
            return;
        }
        const message = `L'utilisateur ${req.body.nom} n'a pas été créé avec succès`;
        res.status(500).json({ message, data: error });
    }
};

module.exports = (app) => {
    app.post("/api/user", auth, createUser);
};
