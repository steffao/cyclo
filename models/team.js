'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Team.hasOne(models.Cyclist), {
        foreignKey : {name : 'team_id'},
        onDelete : 'SET NULL'
      }
    }
  }
  Team.init({
    name: DataTypes.STRING,
    team_shirt: DataTypes.STRING,
    short_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return Team;
};