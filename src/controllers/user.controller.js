const { UserService } = require("../services");


const userRegister = async (req, res, next) => {
    try {
        const newUser = req.body;
        const result = await UserService.create(newUser);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Not valid data",
        })
    }
}


const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserService.getAll();
        res.json(users);
        console.log(users);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Something got wrong :("
        })    
    }
}

module.exports = {
    userRegister,
    getAllUsers
}