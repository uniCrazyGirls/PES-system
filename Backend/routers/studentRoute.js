const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const {
  HomePageView,
  LectureDetails,
  CompleteResultSheet,
  ICTResults,
  MathResults,
  PhysicsResults,
  Logout,
  Settings,
  SubjectsInTheDegree,
  ApplyRecorrection
} = require("../controllers/studentController");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/homepage", HomePageView);
router.get("/lecturedetails", LectureDetails);
router.get("/completeresultsheet", CompleteResultSheet);
router.get("/ictresults", ICTResults);
router.get("/mathresults", MathResults);
router.get("/physicsresults", PhysicsResults);
router.get("/logout", Logout);
router.get("/settings", Settings);
router.get("/subjectsinthedegree", SubjectsInTheDegree);
router.get("/recorrection", ApplyRecorrection);

module.exports = router;
