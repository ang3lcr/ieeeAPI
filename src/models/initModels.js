const {Chapter, User, Course, News, Research} = require("./index");

const initModels = () => {

    User.hasOne(Chapter);
    Chapter.belongsTo(User);
   
    Chapter.hasMany(Course);
    Course.belongsTo(Chapter);

    Chapter.hasMany(Research);
    Research.belongsTo(Chapter);

    Chapter.hasMany(News);
    News.belongsTo(Chapter);
    
}


module.exports = initModels;
