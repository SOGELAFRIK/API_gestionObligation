const { ValidationError, UniqueConstraintError } = require("sequelize");
const { models } = require("../../db/sequelize");
const auth = require("../../auth/auth");
const multer = require("multer");
const getUserRole = require("../../auth/getUserRole");

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../../uploads/obligations"); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename for the uploaded file
  },
});

const upload = multer({ storage: storage });

module.exports = (app) => {
  app.post(
    "/api/obligation",
    auth(1, getUserRole),
    upload.single("file"),
    async (req, res) => {
      try {
        const { originalname, filename } = req.file;

        const newObligation = await models.obligation.create({
          ...req.body,
          link_fichier: filename, // Save the filename in the 'link_fichier' column of the 'obligation' table
        });

        const message = `L'obligation avec l'identifiant n°${newObligation.id_obligation} a été créée avec succès`;
        return res.status(201).json({ message, data: newObligation });
      } catch (error) {
        if (
          error instanceof ValidationError ||
          error instanceof UniqueConstraintError
        ) {
          return res.status(400).json({ message: error.message, data: error });
        }
        const message =
          "Une erreur est survenue lors de la création de l'obligation";
        return res.status(500).json({ message, data: error });
      }
    }
  );
};
