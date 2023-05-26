const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('texte', {
    id_texte: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_createur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilisateur',
        key: 'id_utilisateur'
      }
    },
    titre_texte: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    corps_texte: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'texte',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
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
