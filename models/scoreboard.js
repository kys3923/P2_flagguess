'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class scoreboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.scoreboard.belongsTo(models.user)
      models.scoreboard.belongsTo(models.score)
    }
  };
  scoreboard.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    q10score: DataTypes.INTEGER,
    endscore: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'scoreboard',
  });
  return scoreboard;
};