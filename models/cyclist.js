'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cyclist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Cyclist.belongsTo(models.Team), {
        foreignKey : {name : 'team_id'},
        onDelete : 'SET NULL'
      }
    }
  }
  Cyclist.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    team_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cyclist',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Cyclist;
};