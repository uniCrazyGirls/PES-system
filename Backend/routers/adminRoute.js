const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const {
  HomePage,
  EnterICT,
  EnterMaths,
  EnterPhysics,
  SettingView,
  SubjectDetails,
  EnterResults,
} = require("../controllers/adminController");

const { login } = require("../controllers/loginController");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/homepage", HomePage);
router.get("/enterictresults", EnterICT);
router.get("/entermathresults", EnterMaths);
router.get("/enterphysicsresults", EnterPhysics);
router.get("/settings", SettingView);
router.get("/entersubjectresults", SubjectDetails);
router.get("/enterstudentresult", EnterResults);
router.get("/logout", login);

module.exports = router;
