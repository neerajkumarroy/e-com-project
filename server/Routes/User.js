const express = require("express");
const router = express.Router();
const {UserSignup,UserLogin} = require("../Controllers/User.js")

router.route("/signup").post(UserSignup);
router.route('/login').post(UserLogin);

module.exports=router;