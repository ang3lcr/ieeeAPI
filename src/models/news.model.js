const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const News = db.define(
    "news", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        content:{
            type: DataTypes.STRING,
        },
        chapterId:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
)


module.exports = News;