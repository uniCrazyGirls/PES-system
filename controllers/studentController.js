//nevigate to home page
const HomePageView = async (req, res, next) => {
  res.render("studentViews/studentHomePage");
};
//nevigate to lecture details page
const LectureDetails = async (req, res, next) => {
  res.render("studentViews/lectureDetails");
};
//nevigate to complete result sheet page
const CompleteResultSheet = async (req, res, next) => {
  res.render("studentViews/studentCompleteResultSheet");
};
//nevigate to ict results sheet
const ICTResults = async (req, res, next) => {
  res.render("studentViews/studentICT");
};
//nevigate to smaths results sheet
const MathResults = async (req, res, next) => {
  res.render("studentViews/studentMathamatics");
};
//nevigate to physics results sheet
const PhysicsResults = async (req, res, next) => {
  res.render("studentViews/studentPhysics");
};
//nevigate to settings page
const Settings = async (req, res, next) => {
  res.render("studentViews/studentSetting");
};
//nevigate to subjects in the degree page
const SubjectsInTheDegree = async (req, res, next) => {
  res.render("studentViews/studentSubjectsForTheDegree");
};
//nevigate to subjects in the degree page
const ApplyRecorrection = async (req, res, next) => {
  res.render("studentViews/studentApplyRecorrection");
};

module.exports = {
  HomePageView,
  LectureDetails,
  CompleteResultSheet,
  ICTResults,
  MathResults,
  PhysicsResults,
  Settings,
  SubjectsInTheDegree,
  ApplyRecorrection
}