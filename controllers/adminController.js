//nevigate to home page
const HomePageView = async (req, res, next) => {
  res.render("adminViews/adminHomePage");
};
//nevigate to admin settings page
const SettingView = async (req, res, next) => {
  res.render("adminViews/adminSettings");
};

//nevigate to subject results enter page
const SubjectResultsView = async (req, res, next) => {
  res.render("adminViews/adminSubjectResults");
};

//nevigate to year 1 ict results page
const ICT_Y1_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminICTy1_subject");
};

//nevigate to year 2 ict results page
const ICT_Y2_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminICTy2_subject");
};

//nevigate to year 3 ict results page
const ICT_Y3_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminICTy3_subject");
};

//nevigate to year 1 maths results page
const MAT_Y1_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminMathsY1_subject");
};

//nevigate to year 2 maths results page
const MAT_Y2_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminMathsY2_subject");
};

//nevigate to year 3 maths results page
const MAT_Y3_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminMathsY3_subject");
};

//nevigate to year 1 physics results page
const PHY_Y1_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminPhysicsY1_subject");
};

//nevigate to year 2 physics results page
const PHY_Y2_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminPhysicsY2_subject");
};

//nevigate to year 3 physics results page
const PHY_Y3_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminPhysicsY3_subject");
};

//.................................................................................................

//nevigate to home page
const HomePage = async (req, res, next) => {
 
};
//nevigate to admin settings page
const Setting = async (req, res, next) => {
  
};

//nevigate to subject results enter page
const SubjectResults = async (req, res, next) => {
  
};

//nevigate to year 1 ict results page
const ICT_Y1_Subjects = async (req, res, next) => {
 
};

//nevigate to year 2 ict results page
const ICT_Y2_Subjects = async (req, res, next) => {

};

//nevigate to year 3 ict results page
const ICT_Y3_Subjects = async (req, res, next) => {
 
};

//nevigate to year 1 maths results page
const MAT_Y1_Subjects = async (req, res, next) => {
  
};

//nevigate to year 2 maths results page
const MAT_Y2_Subjects = async (req, res, next) => {
  
};

//nevigate to year 3 maths results page
const MAT_Y3_Subjects = async (req, res, next) => {
 
};

//nevigate to year 1 physics results page
const PHY_Y1_Subjects = async (req, res, next) => {
 
};

//nevigate to year 2 physics results page
const PHY_Y2_Subjects = async (req, res, next) => {
 
};

//nevigate to year 3 physics results page
const PHY_Y3_Subjects = async (req, res, next) => {

};

module.exports = {
  HomePageView,
  SettingView,
  SubjectResultsView,
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
  SubjectResults,
  ICT_Y1_Subjects,
  ICT_Y2_Subjects,
  ICT_Y3_Subjects,
  MAT_Y1_Subjects,
  MAT_Y2_Subjects,
  MAT_Y3_Subjects,
  PHY_Y1_Subjects,
  PHY_Y2_Subjects,
  PHY_Y3_Subjects,
};
