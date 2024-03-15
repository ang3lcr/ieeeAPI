const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Chapter = db.define(
    "chapter",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
     name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      images:{
        type: DataTypes.TEXT('long'),
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
      },
      userId: {
      field: "user_id",
      type: DataTypes.INTEGER,
      allowNull: false,
      },
      acronym:{
        type: DataTypes.STRING,
        allowNull: false
      }
    }
  );
  
  module.exports = Chapter;