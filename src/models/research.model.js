const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Research = db.define(
    "research", {
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
            allowNull: false,
        },
        author:{
            type: DataTypes.STRING,
        },
        chapterId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "chapter_id",
        }
    }
)


module.exports = Research;




