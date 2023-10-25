const express = require("express")

const UserController = require("../controller/users.js")

const router = express.Router()

router.get("/",UserController.getAllUsers)

//CREATE-POST
router.post("/",UserController.postAllUsers)

module.exports = router 