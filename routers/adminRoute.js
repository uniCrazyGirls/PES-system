const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const {
  HomePageView,
  SettingView,
  ICT_Y1_ResultsView,
  ICT_Y1_SubjectsView,
  ICT_Y2_ResultsView,
  ICT_Y2_SubjectsView,
  ICT_Y3_ResultsView,
  ICT_Y3_SubjectsView,
  MAT_Y1_ResultsView,
  MAT_Y1_SubjectsView,
  MAT_Y2_ResultsView,
  MAT_Y2_SubjectsView,
  MAT_Y3_ResultsView,
  MAT_Y3_SubjectsView,
  PHY_Y1_ResultsView,
  PHY_Y1_SubjectsView,
  PHY_Y2_ResultsView,
  PHY_Y2_SubjectsView,
  PHY_Y3_ResultsView,
  PHY_Y3_SubjectsView,
} = require("../controllers/adminController");

const { login } = require("../controllers/loginController");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/homepage", HomePageView);
router.get("/settings", SettingView);
router.get("/logout", login);

router.get("/icty1results", ICT_Y1_ResultsView);
router.get("/icty1subjects", ICT_Y1_SubjectsView);
router.get("/icty2results", ICT_Y2_ResultsView);
router.get("/icty2subjects", ICT_Y2_SubjectsView);
router.get("/icty3results", ICT_Y3_ResultsView);
router.get("/icty3subjects", ICT_Y3_SubjectsView);

router.get("/maty1results", MAT_Y1_ResultsView);
router.get("/maty1subjects", MAT_Y1_SubjectsView);
router.get("/maty2results", MAT_Y2_ResultsView);
router.get("/maty2subjects", MAT_Y2_SubjectsView);
router.get("/maty3results", MAT_Y3_ResultsView);
router.get("/maty3subjects", MAT_Y3_SubjectsView);

router.get("/phyy1results", PHY_Y1_ResultsView);
router.get("/phyy1subjects", PHY_Y1_SubjectsView);
router.get("/phyy2results", PHY_Y2_ResultsView);
router.get("/phyy2subjects", PHY_Y2_SubjectsView);
router.get("/phyy3results", PHY_Y3_ResultsView);
router.get("/phyy3subjects", PHY_Y3_SubjectsView);

module.exports = router;