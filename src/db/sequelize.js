const Sequelize = require("sequelize");
const initModels = require("../models/init-models");
const bcrypt = require("bcrypt");

//connexion a la base donées
// const sequelize = new Sequelize("gestionobligations", "root", "", {
//   host: "localhost",
//   dialect: "mariadb",
//   dialectOptions: {
//     timezone: "Etc/GMT-2",
//   },
//   logging: false,
// });

const sequelize = new Sequelize(
  "bgnmjxrclll88sv7ij25",
  "uhprky1i0wzujzpk",
  "RC9e9O9XMlyMCmudnHC9",
  {
    host: "bgnmjxrclll88sv7ij25-mysql.services.clever-cloud.com",
    dialect: "mysql",
    dialectOptions: {
      timezone: "UTC",
    },
    logging: false,
  }
);


/*creation de nos models de base de données 
en utilisant la fonction initModels*/
const models = initModels(sequelize);

//sychroniser notre base de données
const initDb = () => {
  return sequelize
    .sync({ force: false })
    .then(() => {
      console.log("La base de données a été synchronisée avec succès");

      /* bcrypt
        .hash("admin", 10)
        .then((hash) =>
          models.utilisateur.create({
            nom: "kodjo",
            prenom: "henoc",
            email: "admin2@gmail.com",
            mot_de_passe: hash,
            id_entite: 1,
            role_id: 1,
          })
        )
        .then((user) => console.log(user.toJSON()));*/
    })
    .catch((err) => {
      console.log("La base de données n'a pas été synchronisée avec succès");
      console.log(err);
    });
};

//exporter la function iniDb
module.exports = {
  initDb,
  models,
};
