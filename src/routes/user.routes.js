const { Router } = require("express");
const { userRegister, getAllUsers } = require("../controllers");


const router = Router();
router.post("/users", userRegister);
router.get('./users', getAllUsers);


module.exports = router;