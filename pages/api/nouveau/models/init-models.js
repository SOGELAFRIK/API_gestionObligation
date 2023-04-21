var DataTypes = require("sequelize").DataTypes;
var _consolidation = require("./consolidation");
var _entité = require("./entité");
var _obligation = require("./obligation");
var _suivi_obligation = require("./suivi_obligation");
var _utilisateur = require("./utilisateur");
var _workflow = require("./workflow");

function initModels(sequelize) {
  var consolidation = _consolidation(sequelize, DataTypes);
  var entité = _entité(sequelize, DataTypes);
  var obligation = _obligation(sequelize, DataTypes);
  var suivi_obligation = _suivi_obligation(sequelize, DataTypes);
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
  suivi_obligation.belongsTo(utilisateur, { as: "id_utilisateur_utilisateur", foreignKey: "id_utilisateur"});
  utilisateur.hasMany(suivi_obligation, { as: "suivi_obligations", foreignKey: "id_utilisateur"});

  return {
    consolidation,
    entité,
    obligation,
    suivi_obligation,
    utilisateur,
    workflow,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
