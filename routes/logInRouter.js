//External Imports
const express = require("express")

//Internal Imports
const {getLoginPage, login} = require("../controllers/loginController")
const addTitle2HTMLResponse = require("../middlewares/common/decorate_html_reponse")

//Initializing Router
const router = express.Router()

//Get Controller
router.get("/", addTitle2HTMLResponse("Login"), getLoginPage)

//User authentication
router.post("/", login)

module.exports = router