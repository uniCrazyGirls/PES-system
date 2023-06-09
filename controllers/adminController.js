const User = require("../models/signupModel");

// Home page view
const HomePageView = async (req, res, next) => {
  res.render("adminViews/adminHomePage");
};

// Admin settings page view
const SettingView = async (req, res, next) => {
  res.render("adminViews/adminSettings");
};

const SubjectDetailsView = async (req, res, next) => {
  res.render("adminViews/adminSubjects");
};

const LectureDetailsView = async (req, res, next) => {
  res.render("adminViews/adminLectures");
};

// Year 1 ICT results page view
const ICT_Y1_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminICTy1_subject");
};

// Year 2 ICT results page view
const ICT_Y2_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminICTy2_subject");
};

// Year 3 ICT results page view
const ICT_Y3_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminICTy3_subject");
};

// Year 1 Maths results page view
const MAT_Y1_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminMathsY1_subject");
};

// Year 2 Maths results page view
const MAT_Y2_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminMathsY2_subject");
};

// Year 3 Maths results page view
const MAT_Y3_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminMathsY3_subject");
};

// Year 1 Physics results page view
const PHY_Y1_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminPhysicsY1_subject");
};

// Year 2 Physics results page view
const PHY_Y2_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminPhysicsY2_subject");
};

// Year 3 Physics results page view
const PHY_Y3_SubjectsView = async (req, res, next) => {
  res.render("adminViews/adminPhysicsY3_subject");
};
//----------------------------------------------------------------------------------------------------------

const HomePage = async (req, res, next) => {};

const Setting = async (req, res, next) => {};

const SubjectDetails = async (req, res, next) => {};

const LectureDetails = async (req, res, next) => {};
//--------------------------------------------------------------------------------------------------------

// Year 1 ICT results route
const ICT_Y1_Subjects = async (req, res, next) => {
  const { IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream } =
    req.body;

  console.log(IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream )

  try {
    // Find the user with the matching index number
    const user = await User.findOne({ index_number: IndexNo });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid index number",
      });
    }

    if (!IndexNo || typeof IndexNo !== "string") {
      return res.json({ status: "error", message: "invalied Index Number" });
    }

    if (!Grade || typeof Grade !== "string") {
      return res.json({ status: "error", message: "invalied Grade" });
    }

    if (!Semester || typeof Semester !== "string") {
      return res.json({ status: "error", message: "invalied semester" });
    }

    if (!SubjectName || typeof SubjectName !== "string") {
      return res.json({ status: "error", message: "invalied subject name" });
    }
    if (!CourseCode || typeof CourseCode !== "string") {
      return res.json({ status: "error", message: "invalied course code" });
    }

    if (!Year || typeof Year !== "string") {
      return res.json({ status: "error", message: "invalied Year" });
    }

    if (!Stream || typeof Stream !== "string") {
      return res.json({ status: "error", message: "invalied Stream" });
    }

    // Append the results to the user's results array or any appropriate data structure
    user.results.push({
      IndexNo,
      Grade,
      Semester,
      SubjectName,
      CourseCode,
      Year,
      Stream,
    });

    // Save the updated user object
    await user.save();

    // Respond with a success message
    return res.json({
      status: "success",
      message: "Subject added successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.json({ status: "error", message: "An error occurred" });
  }
};

// Year 2 ICT results route
const ICT_Y2_Subjects = async (req, res, next) => {
  const { IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream } =
    req.body;

  console.log(IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream )

  try {
    // Find the user with the matching index number
    const user = await User.findOne({ index_number: IndexNo });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid index number",
      });
    }

    if (!IndexNo || typeof IndexNo !== "string") {
      return res.json({ status: "error", message: "invalied Index Number" });
    }

    if (!Grade || typeof Grade !== "string") {
      return res.json({ status: "error", message: "invalied Grade" });
    }

    if (!Semester || typeof Semester !== "string") {
      return res.json({ status: "error", message: "invalied semester" });
    }

    if (!SubjectName || typeof SubjectName !== "string") {
      return res.json({ status: "error", message: "invalied subject name" });
    }
    if (!CourseCode || typeof CourseCode !== "string") {
      return res.json({ status: "error", message: "invalied course code" });
    }

    if (!Year || typeof Year !== "string") {
      return res.json({ status: "error", message: "invalied Year" });
    }

    if (!Stream || typeof Stream !== "string") {
      return res.json({ status: "error", message: "invalied Stream" });
    }

    // Append the results to the user's results array or any appropriate data structure
    user.results.push({
      IndexNo,
      Grade,
      Semester,
      SubjectName,
      CourseCode,
      Year,
      Stream,
    });

    // Save the updated user object
    await user.save();

    // Respond with a success message
    return res.json({
      status: "success",
      message: "Subject added successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.json({ status: "error", message: "An error occurred" });
  }
};

// Year 3 ICT results route
const ICT_Y3_Subjects = async (req, res, next) => {
  const { IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream } =
    req.body;

  console.log(IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream )

  try {
    // Find the user with the matching index number
    const user = await User.findOne({ index_number: IndexNo });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid index number",
      });
    }

    if (!IndexNo || typeof IndexNo !== "string") {
      return res.json({ status: "error", message: "invalied Index Number" });
    }

    if (!Grade || typeof Grade !== "string") {
      return res.json({ status: "error", message: "invalied Grade" });
    }

    if (!Semester || typeof Semester !== "string") {
      return res.json({ status: "error", message: "invalied semester" });
    }

    if (!SubjectName || typeof SubjectName !== "string") {
      return res.json({ status: "error", message: "invalied subject name" });
    }
    if (!CourseCode || typeof CourseCode !== "string") {
      return res.json({ status: "error", message: "invalied course code" });
    }

    if (!Year || typeof Year !== "string") {
      return res.json({ status: "error", message: "invalied Year" });
    }

    if (!Stream || typeof Stream !== "string") {
      return res.json({ status: "error", message: "invalied Stream" });
    }

    // Append the results to the user's results array or any appropriate data structure
    user.results.push({
      IndexNo,
      Grade,
      Semester,
      SubjectName,
      CourseCode,
      Year,
      Stream,
    });

    // Save the updated user object
    await user.save();

    // Respond with a success message
    return res.json({
      status: "success",
      message: "Subject added successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.json({ status: "error", message: "An error occurred" });
  }
};

// Year 1 Maths results route
const MAT_Y1_Subjects = async (req, res, next) => {
  const { IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream } =
    req.body;

  console.log(IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream )

  try {
    // Find the user with the matching index number
    const user = await User.findOne({ index_number: IndexNo });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid index number",
      });
    }

    if (!IndexNo || typeof IndexNo !== "string") {
      return res.json({ status: "error", message: "invalied Index Number" });
    }

    if (!Grade || typeof Grade !== "string") {
      return res.json({ status: "error", message: "invalied Grade" });
    }

    if (!Semester || typeof Semester !== "string") {
      return res.json({ status: "error", message: "invalied semester" });
    }

    if (!SubjectName || typeof SubjectName !== "string") {
      return res.json({ status: "error", message: "invalied subject name" });
    }
    if (!CourseCode || typeof CourseCode !== "string") {
      return res.json({ status: "error", message: "invalied course code" });
    }

    if (!Year || typeof Year !== "string") {
      return res.json({ status: "error", message: "invalied Year" });
    }

    if (!Stream || typeof Stream !== "string") {
      return res.json({ status: "error", message: "invalied Stream" });
    }

    // Append the results to the user's results array or any appropriate data structure
    user.results.push({
      IndexNo,
      Grade,
      Semester,
      SubjectName,
      CourseCode,
      Year,
      Stream,
    });

    // Save the updated user object
    await user.save();

    // Respond with a success message
    return res.json({
      status: "success",
      message: "Subject added successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.json({ status: "error", message: "An error occurred" });
  }
};

// Year 2 Maths results route
const MAT_Y2_Subjects = async (req, res, next) => {
  const { IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream } =
    req.body;

  console.log(IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream )

  try {
    // Find the user with the matching index number
    const user = await User.findOne({ index_number: IndexNo });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid index number",
      });
    }

    if (!IndexNo || typeof IndexNo !== "string") {
      return res.json({ status: "error", message: "invalied Index Number" });
    }

    if (!Grade || typeof Grade !== "string") {
      return res.json({ status: "error", message: "invalied Grade" });
    }

    if (!Semester || typeof Semester !== "string") {
      return res.json({ status: "error", message: "invalied semester" });
    }

    if (!SubjectName || typeof SubjectName !== "string") {
      return res.json({ status: "error", message: "invalied subject name" });
    }
    if (!CourseCode || typeof CourseCode !== "string") {
      return res.json({ status: "error", message: "invalied course code" });
    }

    if (!Year || typeof Year !== "string") {
      return res.json({ status: "error", message: "invalied Year" });
    }

    if (!Stream || typeof Stream !== "string") {
      return res.json({ status: "error", message: "invalied Stream" });
    }

    // Append the results to the user's results array or any appropriate data structure
    user.results.push({
      IndexNo,
      Grade,
      Semester,
      SubjectName,
      CourseCode,
      Year,
      Stream,
    });

    // Save the updated user object
    await user.save();

    // Respond with a success message
    return res.json({
      status: "success",
      message: "Subject added successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.json({ status: "error", message: "An error occurred" });
  }
};

// Year 3 Maths results route
const MAT_Y3_Subjects = async (req, res, next) => {
  const { IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream } =
    req.body;

  console.log(IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream )

  try {
    // Find the user with the matching index number
    const user = await User.findOne({ index_number: IndexNo });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid index number",
      });
    }

    if (!IndexNo || typeof IndexNo !== "string") {
      return res.json({ status: "error", message: "invalied Index Number" });
    }

    if (!Grade || typeof Grade !== "string") {
      return res.json({ status: "error", message: "invalied Grade" });
    }

    if (!Semester || typeof Semester !== "string") {
      return res.json({ status: "error", message: "invalied semester" });
    }

    if (!SubjectName || typeof SubjectName !== "string") {
      return res.json({ status: "error", message: "invalied subject name" });
    }
    if (!CourseCode || typeof CourseCode !== "string") {
      return res.json({ status: "error", message: "invalied course code" });
    }

    if (!Year || typeof Year !== "string") {
      return res.json({ status: "error", message: "invalied Year" });
    }

    if (!Stream || typeof Stream !== "string") {
      return res.json({ status: "error", message: "invalied Stream" });
    }

    // Append the results to the user's results array or any appropriate data structure
    user.results.push({
      IndexNo,
      Grade,
      Semester,
      SubjectName,
      CourseCode,
      Year,
      Stream,
    });

    // Save the updated user object
    await user.save();

    // Respond with a success message
    return res.json({
      status: "success",
      message: "Subject added successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.json({ status: "error", message: "An error occurred" });
  }
};

// Year 1 Physics results route
const PHY_Y1_Subjects = async (req, res, next) => {
  const { IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream } =
    req.body;

  console.log(IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream )

  try {
    // Find the user with the matching index number
    const user = await User.findOne({ index_number: IndexNo });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid index number",
      });
    }

    if (!IndexNo || typeof IndexNo !== "string") {
      return res.json({ status: "error", message: "invalied Index Number" });
    }

    if (!Grade || typeof Grade !== "string") {
      return res.json({ status: "error", message: "invalied Grade" });
    }

    if (!Semester || typeof Semester !== "string") {
      return res.json({ status: "error", message: "invalied semester" });
    }

    if (!SubjectName || typeof SubjectName !== "string") {
      return res.json({ status: "error", message: "invalied subject name" });
    }
    if (!CourseCode || typeof CourseCode !== "string") {
      return res.json({ status: "error", message: "invalied course code" });
    }

    if (!Year || typeof Year !== "string") {
      return res.json({ status: "error", message: "invalied Year" });
    }

    if (!Stream || typeof Stream !== "string") {
      return res.json({ status: "error", message: "invalied Stream" });
    }

    // Append the results to the user's results array or any appropriate data structure
    user.results.push({
      IndexNo,
      Grade,
      Semester,
      SubjectName,
      CourseCode,
      Year,
      Stream,
    });

    // Save the updated user object
    await user.save();

    // Respond with a success message
    return res.json({
      status: "success",
      message: "Subject added successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.json({ status: "error", message: "An error occurred" });
  }
};

// Year 2 Physics results route
const PHY_Y2_Subjects = async (req, res, next) => {
  const { IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream } =
    req.body;

  console.log(IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream )

  try {
    // Find the user with the matching index number
    const user = await User.findOne({ index_number: IndexNo });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid index number",
      });
    }

    if (!IndexNo || typeof IndexNo !== "string") {
      return res.json({ status: "error", message: "invalied Index Number" });
    }

    if (!Grade || typeof Grade !== "string") {
      return res.json({ status: "error", message: "invalied Grade" });
    }

    if (!Semester || typeof Semester !== "string") {
      return res.json({ status: "error", message: "invalied semester" });
    }

    if (!SubjectName || typeof SubjectName !== "string") {
      return res.json({ status: "error", message: "invalied subject name" });
    }
    if (!CourseCode || typeof CourseCode !== "string") {
      return res.json({ status: "error", message: "invalied course code" });
    }

    if (!Year || typeof Year !== "string") {
      return res.json({ status: "error", message: "invalied Year" });
    }

    if (!Stream || typeof Stream !== "string") {
      return res.json({ status: "error", message: "invalied Stream" });
    }

    // Append the results to the user's results array or any appropriate data structure
    user.results.push({
      IndexNo,
      Grade,
      Semester,
      SubjectName,
      CourseCode,
      Year,
      Stream,
    });

    // Save the updated user object
    await user.save();

    // Respond with a success message
    return res.json({
      status: "success",
      message: "Subject added successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.json({ status: "error", message: "An error occurred" });
  }
};

// Year 3 Physics results route
const PHY_Y3_Subjects = async (req, res, next) => {
  const { IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream } =
    req.body;

  console.log(IndexNo, Grade, Semester, SubjectName, CourseCode, Year, Stream )

  try {
    // Find the user with the matching index number
    const user = await User.findOne({ index_number: IndexNo });

    if (!user) {
      return res.json({
        status: "error",
        message: "Invalid index number",
      });
    }

    if (!IndexNo || typeof IndexNo !== "string") {
      return res.json({ status: "error", message: "invalied Index Number" });
    }

    if (!Grade || typeof Grade !== "string") {
      return res.json({ status: "error", message: "invalied Grade" });
    }

    if (!Semester || typeof Semester !== "string") {
      return res.json({ status: "error", message: "invalied semester" });
    }

    if (!SubjectName || typeof SubjectName !== "string") {
      return res.json({ status: "error", message: "invalied subject name" });
    }
    if (!CourseCode || typeof CourseCode !== "string") {
      return res.json({ status: "error", message: "invalied course code" });
    }

    if (!Year || typeof Year !== "string") {
      return res.json({ status: "error", message: "invalied Year" });
    }

    if (!Stream || typeof Stream !== "string") {
      return res.json({ status: "error", message: "invalied Stream" });
    }

    // Append the results to the user's results array or any appropriate data structure
    user.results.push({
      IndexNo,
      Grade,
      Semester,
      SubjectName,
      CourseCode,
      Year,
      Stream,
    });

    // Save the updated user object
    await user.save();

    // Respond with a success message
    return res.json({
      status: "success",
      message: "Subject added successfully",
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error(error);
    return res.json({ status: "error", message: "An error occurred" });
  }
};

module.exports = {
  HomePageView,
  SettingView,
  SubjectDetailsView,
  LectureDetailsView,
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
  SubjectDetails,
  LectureDetails,
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
