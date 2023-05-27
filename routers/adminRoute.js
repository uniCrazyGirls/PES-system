const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const {
  HomePageView,
  SettingView,
  ICT_Y1_SubjectsView,
  ICT_Y2_SubjectsView,
  ICT_Y3_SubjectsView,
  MAT_Y1_SubjectsView,
  MAT_Y2_SubjectsView,
  MAT_Y3_SubjectsView,
  PHY_Y1_SubjectsView,
  PHY_Y2_SubjectsView,
  PHY_Y3_SubjectsView,

  HomePage,
  Setting,
  ICT_Y1_Subjects,
  ICT_Y2_Subjects,
  ICT_Y3_Subjects,
  MAT_Y1_Subjects,
  MAT_Y2_Subjects,
  MAT_Y3_Subjects,
  PHY_Y1_Subjects,
  PHY_Y2_Subjects,
  PHY_Y3_Subjects,
} = require("../controllers/adminController");

const { login } = require("../controllers/loginController");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/logout", login);

router.get("/homepage", HomePageView);
router.get("/settings", SettingView);

router.get("/ICT/1stYear", ICT_Y1_SubjectsView);
router.get("/ICT/2stYear", ICT_Y2_SubjectsView);
router.get("/ICT/3stYear", ICT_Y3_SubjectsView);

router.get("/Maths/1stYear", MAT_Y1_SubjectsView);
router.get("/Maths/2stYear", MAT_Y2_SubjectsView);
router.get("/Maths/3stYear", MAT_Y3_SubjectsView);

router.get("/Physics/1stYear", PHY_Y1_SubjectsView);
router.get("/Physics/2stYear", PHY_Y2_SubjectsView);
router.get("/Physics/3stYear", PHY_Y3_SubjectsView);

router.post("/homepage", HomePage);
router.post("/settings", Setting);

router.post("/ICT/1stYear", ICT_Y1_Subjects);
router.post("/ICT/2stYear", ICT_Y2_Subjects);
router.post("/ICT/3stYear", ICT_Y3_Subjects);

router.post("/Maths/1stYear", MAT_Y1_Subjects);
router.post("/Maths/2stYear", MAT_Y2_Subjects);
router.post("/Maths/3stYear", MAT_Y3_Subjects);

router.post("/Physics/1stYear", PHY_Y1_Subjects);
router.post("/Physics/2stYear", PHY_Y2_Subjects);
router.post("/Physics/3stYear", PHY_Y3_Subjects);

module.exports = router;
