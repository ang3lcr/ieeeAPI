const { ChapterService } = require("../services");


const chapterRegister = async (req, res, next) => {
    try {
        const newChapter = req.body;
        const result = await ChapterService.create(newChapter);
        res.status(201).json(result);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Not valid data",
        })
    }
}


const getAllChapters = async (req, res, next) => {
    try {
        const chapters = await ChapterService.getAll();
        res.json(chapters);
    } catch (error) {
        next({
            status: 400,
            errorContent: error,
            message: "Something got wrong :("
        })    
    }
}



module.exports = {
    chapterRegister,
    getAllChapters
}



