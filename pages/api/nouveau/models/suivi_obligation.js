const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suivi_obligation', {
    id_suivi: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    etat_conformite: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    date_suivi: {
      type: DataTypes.DATE,
      allowNull: true
    },
    commentaire: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fichier_joint: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_obligation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'obligation',
        key: 'id_obligation'
      }
    },
    id_utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'utilisateur',
        key: 'id_utilisateur'
      }
    }
  }, {
    sequelize,
    tableName: 'suivi_obligation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_suivi" },
        ]
      },
      {
        name: "id_obligation",
        using: "BTREE",
        fields: [
          { name: "id_obligation" },
        ]
      },
      {
        name: "id_utilisateur",
        using: "BTREE",
        fields: [
          { name: "id_utilisateur" },
        ]
      },
    ]
  });
};
