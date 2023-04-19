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
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    date_echeance: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_maj: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_entite: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'entité',
        key: 'id_entite'
      }
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
        name: "id_entite",
        using: "BTREE",
        fields: [
          { name: "id_entite" },
        ]
      },
    ]
  });
};
