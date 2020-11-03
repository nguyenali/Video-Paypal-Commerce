const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Purchase extends Model {}

Purchase.init(
  {
    id : {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull : false,
      autoIncrement : true
    },
    video_id : {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_usd : {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    client_id : {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Purchase',
  }
);


module.exports = Purchase;
