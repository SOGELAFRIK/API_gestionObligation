const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chapitre', {
    id_chapitre: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_texte: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    titre_chapitre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    corps_chapitre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_createur: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'chapitre',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chapitre" },
        ]
      },
      {
        name: "id_article",
        using: "BTREE",
        fields: [
          { name: "id_texte" },
        ]
      },
      {
        name: "id_createur",
        using: "BTREE",
        fields: [
          { name: "id_createur" },
        ]
      },
    ]
  });
};
