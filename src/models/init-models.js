var DataTypes = require("sequelize").DataTypes;
var _article = require("./article");
var _chapitre = require("./chapitre");
var _consolidation = require("./consolidation");
var _entité = require("./entité");
var _niveau_risque = require("./niveau_risque");
var _obligation = require("./obligation");
var _periodicite = require("./periodicite");
var _role = require("./role");
var _suivi_obligation = require("./suivi_obligation");
var _texte = require("./texte");
var _utilisateur = require("./utilisateur");
var _workflow = require("./workflow");

function initModels(sequelize) {
  var article = _article(sequelize, DataTypes);
  var chapitre = _chapitre(sequelize, DataTypes);
  var consolidation = _consolidation(sequelize, DataTypes);
  var entité = _entité(sequelize, DataTypes);
  var niveau_risque = _niveau_risque(sequelize, DataTypes);
  var obligation = _obligation(sequelize, DataTypes);
  var periodicite = _periodicite(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);
  var suivi_obligation = _suivi_obligation(sequelize, DataTypes);
  var texte = _texte(sequelize, DataTypes);
  var utilisateur = _utilisateur(sequelize, DataTypes);
  var workflow = _workflow(sequelize, DataTypes);

  obligation.belongsTo(entité, { as: "id_entite_entité", foreignKey: "id_entite"});
  entité.hasMany(obligation, { as: "obligations", foreignKey: "id_entite"});
  utilisateur.belongsTo(entité, { as: "id_entite_entité", foreignKey: "id_entite"});
  entité.hasMany(utilisateur, { as: "utilisateurs", foreignKey: "id_entite"});
  suivi_obligation.belongsTo(obligation, { as: "id_obligation_obligation", foreignKey: "id_obligation"});
  obligation.hasMany(suivi_obligation, { as: "suivi_obligations", foreignKey: "id_obligation"});
  workflow.belongsTo(obligation, { as: "id_obligation_obligation", foreignKey: "id_obligation"});
  obligation.hasMany(workflow, { as: "workflows", foreignKey: "id_obligation"});
  utilisateur.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(utilisateur, { as: "utilisateurs", foreignKey: "role_id"});
  suivi_obligation.belongsTo(utilisateur, { as: "id_utilisateur_utilisateur", foreignKey: "id_utilisateur"});
  utilisateur.hasMany(suivi_obligation, { as: "suivi_obligations", foreignKey: "id_utilisateur"});

  return {
    article,
    chapitre,
    consolidation,
    entité,
    niveau_risque,
    obligation,
    periodicite,
    role,
    suivi_obligation,
    texte,
    utilisateur,
    workflow,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
