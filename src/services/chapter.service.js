const { Chapter } = require("../models")

class ChapterService {


    static async create (newChapter) {
        try {
            const result = await Chapter.create(newChapter);
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getAll() {
        try {
            const result = await Chapter.findAll();
            return result;
        } catch (error) {
            throw error
        }
    }

}


module.exports = ChapterService;