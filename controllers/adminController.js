//nevigate to home page
const HomePageView = async (req, res, next) => {
  res.render("adminViews/adminHomePage");
};
//nevigate to home page
const SettingView = async (req, res, next) => {
  res.render("adminViews/adminSettings");
};

//nevigate to home page
const SubjectResults = async (req, res, next) => {
  res.render("adminViews/adminSubjectResults");
};

//nevigate to home page
const ICT_Y1_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminICTy1_subject");
};

//nevigate to home page
const ICT_Y2_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminICTy2_subject");
};

//nevigate to home page
const ICT_Y3_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminICTy3_subject");
};

//nevigate to home page
const MAT_Y1_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminMathsY1_subject");
};

//nevigate to home page
const MAT_Y2_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminMathsY2_subject");
};

//nevigate to home page
const MAT_Y3_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminMathsY3_subject");
};

//nevigate to home page
const PHY_Y1_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminPhysicsY1_subject");
};

//nevigate to home page
const PHY_Y2_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminPhysicsY2_subject");
};

//nevigate to home page
const PHY_Y3_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminPhysicsY3_subject");
};

module.exports = {
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
};
