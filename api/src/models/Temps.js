const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  // definir el modelo
  sequelize.define('temps', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false
  });
};
