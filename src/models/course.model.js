const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Course = db.define(
    "course", {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        startDate:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            field: "start_date",
        },
        callLink:{
            type: DataTypes.STRING,
            field: "call_link",
        },
        deadlineRegister:{
            type: DataTypes.DATE,
            field: "deadline_register"
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        chapterId:{
            type: DataTypes.INTEGER,
            field: "chapter_id"
        }
    }
)


module.exports = Course;