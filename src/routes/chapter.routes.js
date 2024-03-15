const { Router } = require("express");
const { chapterRegister, getAllChapters } = require("../controllers");


const router = Router();
router.post("/chapters", chapterRegister);
router.get("/chapters", getAllChapters);


module.exports = router;