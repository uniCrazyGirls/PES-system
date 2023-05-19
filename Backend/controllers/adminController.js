//nevigate to home page
const HomePage = async (req, res, next) => {
  res.render("adminViews/adminHomePage");
};

//nevigate to home page
const EnterICT = async (req, res, next) => {
    res.render("adminViews/adminICT");
  };

  //nevigate to home page
const EnterMaths = async (req, res, next) => {
    res.render("adminViews/adminMaths");
  };

  //nevigate to home page
const EnterPhysics = async (req, res, next) => {
    res.render("adminViews/adminPhysics");
  };

//nevigate to home page
const SettingView = async (req, res, next) => {
    res.render("adminViews/adminSettings");
  };

  //nevigate to home page
const SubjectDetails = async (req, res, next) => {
    res.render("adminViews/adminSubjects");
  };

  //nevigate to home page
const EnterResults = async (req, res, next) => {
    res.render("adminViews/adminResults");
  };


module.exports = {
  HomePage,
  EnterICT,
  EnterMaths,
  EnterPhysics,
  SettingView,
  SubjectDetails,
  EnterResults,
};
