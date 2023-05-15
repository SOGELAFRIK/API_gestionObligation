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
      allowNull: false,
      references: {
        model: 'niveau_risque',
        key: 'id_niveau_risque'
      }
    },
    id_article_associe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'article',
        key: 'id_article'
      },
      unique: "obligation_ibfk_2"
    },
    id_periodicite: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'periodicite',
        key: 'id_periodicite'
      },
      unique: "obligation_ibfk_3"
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
      references: {
        model: 'utilisateur',
        key: 'id_utilisateur'
      },
      unique: "obligation_ibfk_5"
    },
    id_executeur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'id_utilisateur'
      },
      unique: "obligation_ibfk_6"
    },
    id_controleur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'id_utilisateur'
      },
      unique: "obligation_ibfk_7"
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
        name: "obligation_ibfk_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_article_associe" },
        ]
      },
      {
        name: "obligation_ibfk_3",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_periodicite" },
        ]
      },
      {
        name: "obligation_ibfk_5",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_commenditaire" },
        ]
      },
      {
        name: "obligation_ibfk_6",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_executeur" },
        ]
      },
      {
        name: "obligation_ibfk_7",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_controleur" },
        ]
      },
      {
        name: "id_article",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_article_associe" },
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
        name: "id_entite",
        using: "BTREE",
        fields: [
          { name: "id_entite" },
        ]
      },
    ]
  });
};
