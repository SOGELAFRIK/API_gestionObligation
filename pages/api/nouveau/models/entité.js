const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('entité', {
    id_entite: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adresse: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ville: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pays: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'entité',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_entite" },
        ]
      },
    ]
  });
};
