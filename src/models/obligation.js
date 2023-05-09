const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('obligation', {
    id_obligation: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    titre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_echeance: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_creation: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_maj: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    risque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    link_fichier_controle: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_niveau_risque: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_article_associe: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_periodicite: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_entite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'entité',
        key: 'id_entite'
      }
    },
    id_commenditaire: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "id_commenditaire"
    },
    id_executeur: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_controleur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "id_controleur"
    }
  }, {
    sequelize,
    tableName: 'obligation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_obligation" },
        ]
      },
      {
        name: "id_commenditaire",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_commenditaire" },
        ]
      },
      {
        name: "id_controleur",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_controleur" },
        ]
      },
      {
        name: "id_entite",
        using: "BTREE",
        fields: [
          { name: "id_entite" },
        ]
      },
      {
        name: "id_responsable",
        using: "BTREE",
        fields: [
          { name: "id_executeur" },
        ]
      },
      {
        name: "id_periodicite",
        using: "BTREE",
        fields: [
          { name: "id_periodicite" },
        ]
      },
      {
        name: "id_niveau_risque",
        using: "BTREE",
        fields: [
          { name: "id_niveau_risque" },
        ]
      },
      {
        name: "id_article_associe",
        using: "BTREE",
        fields: [
          { name: "id_article_associe" },
        ]
      },
    ]
  });
};
