const { models } = require("../../db/sequelize");
const auth = require("../../auth/auth");
const multer = require("multer");
const getUserRole = require("../../auth/getUserRole");

/**
 * Specifies the destination folder for uploaded files.
 *
 * @param {Object} req - the request object.
 * @param {Object} file - the uploaded file object.
 * @param {function} cb - the callback function.
 * @return {void} - no return value.
 */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../../uploads/textes"); // Specify the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Generate a unique filename for the uploaded file
  },
});

const upload = multer({ storage: storage });

/**
 * Creates a new 'texte' object with the given request data and saves it to the database.
 *
 * @param {Object} app - The Express app object.
 * @return {Promise} A Promise object that resolves to the created 'texte' object.
 */
module.exports = (app) => {
  app.post(
    "/api/texte",
    auth(1, getUserRole),
    upload.single("file"),
    async (req, res) => {
      try {
        const { originalname, filename } = req.file;

        const texte = await models.texte.create({
          ...req.body,
          link_fichier_texte: filename, // Save the filename in the 'link_fichier_texte' column of the 'texte' table
        });

        const message = `Le texte avec l'identifiant n${texte.id_texte} a été créé avec succès`;
        return res.status(201).json({ message, data: texte });
      } catch (error) {
        const message = "Une erreur est survenue lors de la création du texte";
        return res.status(500).json({ message, data: error });
      }
    }
  );
};
