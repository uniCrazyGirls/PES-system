const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const {
  loginView,
  signupView,
  forgotpasswordView,
  resetpasswordView,
  signup,
  login,
  forgetPassword,
  resetPassword,
} = require("../controllers/loginController");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/login", loginView);
router.get("/signup", signupView);
router.get("/forgetpassword", forgotpasswordView);
router.get("/resetpassword/:id/:token", resetpasswordView);

router.post("/signup", signup); // New route to handle signup action
router.post("/login", login); // New route to handle signup action
router.post("/forgetpassword", forgetPassword); // New route to handle forget password action
router.post("/resetpassword/:id/:token", resetPassword); // New route to handle reset password action

module.exports = router;
