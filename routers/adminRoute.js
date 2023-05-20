const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const {
  HomePageView,
  SettingView,
  SubjectResults,
  ICT_Y1_SubjectsView,
  ICT_Y2_SubjectsView,
  ICT_Y3_SubjectsView,
  MAT_Y1_SubjectsView,
  MAT_Y2_SubjectsView,
  MAT_Y3_SubjectsView,
  PHY_Y1_SubjectsView,
  PHY_Y2_SubjectsView,
  PHY_Y3_SubjectsView,
} = require("../controllers/adminController");

const { login } = require("../controllers/loginController");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/homepage", HomePageView);
router.get("/settings", SettingView);
router.get("/logout", login);
router.get("/inputresults", SubjectResults);

router.get("/icty1subjects", ICT_Y1_SubjectsView);

router.get("/icty2subjects", ICT_Y2_SubjectsView);

router.get("/icty3subjects", ICT_Y3_SubjectsView);

router.get("/maty1subjects", MAT_Y1_SubjectsView);

router.get("/maty2subjects", MAT_Y2_SubjectsView);

router.get("/maty3subjects", MAT_Y3_SubjectsView);

router.get("/phyy1subjects", PHY_Y1_SubjectsView);

router.get("/phyy2subjects", PHY_Y2_SubjectsView);

router.get("/phyy3subjects", PHY_Y3_SubjectsView);

module.exports = router;
