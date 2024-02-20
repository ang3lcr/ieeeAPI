const { User } = require('../models');

class UserService {
    static async create(newUser) {
        try {
            const result = await User.create(newUser);
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const result = await User.findAll();
            return result;
        } catch (error) {
            throw error
        }
    }
}


module.exports = UserService;