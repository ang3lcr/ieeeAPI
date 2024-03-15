const { userRegister, getAllUsers } = require("./user.controller");
const { chapterRegister, getAllChapters } = require("./chapter.controller")

module.exports = {
    userRegister,
    getAllUsers,
    chapterRegister,
    getAllChapters,
}