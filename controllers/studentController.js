const Results_y1_s1 = [];
const Results_y1_s2 = [];
const Results_y2_s1 = [];
const Results_y2_s2 = [];
const Results_y3_s1 = [];
const Results_y3_s2 = [];
const subjectCredits = [];
const subjectResults = [];
const subjectGPAs = [];
const ICTGPA = [];
const MATGPA = [];
const PHYGPA = [];
const fullGPA = [];
// Function to clear the result arrays
const clearResultArrays = () => {
  Results_y1_s1.length = 0;
  Results_y1_s2.length = 0;
  Results_y2_s1.length = 0;
  Results_y2_s2.length = 0;
  Results_y3_s1.length = 0;
  Results_y3_s2.length = 0;
  subjectCredits.length = 0;
  subjectResults.length = 0;
  subjectGPAs.length = 0;
  fullGPA.length = 0;
};

const calculatefullgpa = (req, res, next) => {
  try {
    const user = req.user;
    const userResults = new Set(); // Create a Set to store unique results
    clearResultArrays(); // Clear the result arrays before processing

    // Loop through the user's results
    for (const result of user.results) {
      const subjectCode = result.CourseCode;

      // Function to extract the credit count from the subject code
      const getCreditCount = (subjectCode) => {
        const parts = subjectCode.split(" "); // Split the subject code by spaces
        if (parts.length >= 2) {
          const creditCountStr = parts[1]; // Get the credit count portion
          creditCount = parseFloat(creditCountStr); // Convert the credit count to a float number
          if (!isNaN(creditCount)) {
            return creditCount;
          }
        }
        return 0; // Return 0 if the credit count cannot be extracted or parsed
      };

      const creditCount = getCreditCount(subjectCode); // Get the credit count from the subject code
      const subjectResult = result.Grade;
      const subjectKey = result.CourseCode + result.SubjectName; // Create a unique key using subject code and name

      // Function to calculate GPA based on subject result
      const calculateGPA = (subjectResult) => {
        if (subjectResult === "A+") {
          return 4.0;
        } else if (subjectResult === "A") {
          return 4.0;
        } else if (subjectResult === "A-") {
          return 3.7;
        } else if (subjectResult === "B+") {
          return 3.3;
        } else if (subjectResult === "B") {
          return 3.0;
        } else if (subjectResult === "B-") {
          return 2.7;
        } else if (subjectResult === "C+") {
          return 2.3;
        } else if (subjectResult === "C") {
          return 2.0;
        } else if (subjectResult === "C-") {
          return 1.7;
        } else if (subjectResult === "D+") {
          return 1.3;
        } else if (subjectResult === "D") {
          return 1.0;
        } else if (subjectResult === "D-") {
          return 0.0;
        } else {
          return 0.0; // Default value if the subject result is not recognized
        }
      };

      // Check if the subject key already exists in the Set
      if (!userResults.has(subjectKey)) {
        const subjectGPA = calculateGPA(subjectResult);
        // Store the credit value, subject result, and GPA for each subject
        subjectCredits.push(creditCount);
        subjectResults.push(subjectResult);
        subjectGPAs.push(subjectGPA);
        userResults.add(subjectKey); // Add the subject key to the Set to mark it as visited
      }
    }

    // Calculate the full GPA based on the subject GPAs and credit values
    let totalCredits = 0;
    let weightedGPASum = 0;

    for (let i = 0; i < subjectGPAs.length; i++) {
      const subjectGPA = subjectGPAs[i];
      const creditCount = subjectCredits[i];

      const weightedGPA = subjectGPA * creditCount;
      weightedGPASum += weightedGPA;

      totalCredits += creditCount;
    }

    const fullGPAValue = weightedGPASum / totalCredits;
    fullGPA.push(fullGPAValue);
    console.log(fullGPAValue);
  } catch (error) {
    // Handle error
  }
};

const ICTgpa = (req, res, next) => {
  try {
    const user = req.user;
    const userResults = new Set(); // Create a Set to store unique results
    clearResultArrays(); // Clear the result arrays before processing

    // Loop through the user's results
    for (const result of user.results) {
      if (result.Stream === "Information and Communication Technology") {
        const subjectCode = result.CourseCode;

        // Function to extract the credit count from the subject code
        const getCreditCount = (subjectCode) => {
          const parts = subjectCode.split(" "); // Split the subject code by spaces
          if (parts.length >= 2) {
            const creditCountStr = parts[1]; // Get the credit count portion
            creditCount = parseFloat(creditCountStr); // Convert the credit count to a float number
            if (!isNaN(creditCount)) {
              return creditCount;
            }
          }
          return 0; // Return 0 if the credit count cannot be extracted or parsed
        };

        const creditCount = getCreditCount(subjectCode); // Get the credit count from the subject code
        const subjectResult = result.Grade;
        const subjectKey = result.CourseCode + result.SubjectName; // Create a unique key using subject code and name

        // Function to calculate GPA based on subject result
        const calculateGPA = (subjectResult) => {
          if (subjectResult === "A+") {
            return 4.0;
          } else if (subjectResult === "A") {
            return 4.0;
          } else if (subjectResult === "A-") {
            return 3.7;
          } else if (subjectResult === "B+") {
            return 3.3;
          } else if (subjectResult === "B") {
            return 3.0;
          } else if (subjectResult === "B-") {
            return 2.7;
          } else if (subjectResult === "C+") {
            return 2.3;
          } else if (subjectResult === "C") {
            return 2.0;
          } else if (subjectResult === "C-") {
            return 1.7;
          } else if (subjectResult === "D+") {
            return 1.3;
          } else if (subjectResult === "D") {
            return 1.0;
          } else if (subjectResult === "D-") {
            return 0.0;
          } else {
            return 0.0; // Default value if the subject result is not recognized
          }
        };

        // Check if the subject key already exists in the Set
        if (!userResults.has(subjectKey)) {
          const subjectGPA = calculateGPA(subjectResult);
          // Store the credit value, subject result, and GPA for each subject
          subjectCredits.push(creditCount);
          subjectResults.push(subjectResult);
          subjectGPAs.push(subjectGPA);
          userResults.add(subjectKey); // Add the subject key to the Set to mark it as visited
        }
      }
    }

    // Calculate the full GPA based on the subject GPAs and credit values
    let totalCredits = 0;
    let weightedGPASum = 0;

    for (let i = 0; i < subjectGPAs.length; i++) {
      const subjectGPA = subjectGPAs[i];
      const creditCount = subjectCredits[i];

      const weightedGPA = subjectGPA * creditCount;
      weightedGPASum += weightedGPA;

      totalCredits += creditCount;
    }

    const fullGPAValue = weightedGPASum / totalCredits;
    ICTGPA.push(fullGPAValue);
    console.log(fullGPAValue);
  } catch (error) {
    // Handle error
  }
};

const Matgpa = (req, res, next) => {
  try {
    const user = req.user;
    const userResults = new Set(); // Create a Set to store unique results
    clearResultArrays(); // Clear the result arrays before processing

    // Loop through the user's results
    for (const result of user.results) {
      if (result.Stream === "Mathamatics") {
        const subjectCode = result.CourseCode;

        // Function to extract the credit count from the subject code
        const getCreditCount = (subjectCode) => {
          const parts = subjectCode.split(" "); // Split the subject code by spaces
          if (parts.length >= 2) {
            const creditCountStr = parts[1]; // Get the credit count portion
            creditCount = parseFloat(creditCountStr); // Convert the credit count to a float number
            if (!isNaN(creditCount)) {
              return creditCount;
            }
          }
          return 0; // Return 0 if the credit count cannot be extracted or parsed
        };

        const creditCount = getCreditCount(subjectCode); // Get the credit count from the subject code
        const subjectResult = result.Grade;
        const subjectKey = result.CourseCode + result.SubjectName; // Create a unique key using subject code and name

        // Function to calculate GPA based on subject result
        const calculateGPA = (subjectResult) => {
          if (subjectResult === "A+") {
            return 4.0;
          } else if (subjectResult === "A") {
            return 4.0;
          } else if (subjectResult === "A-") {
            return 3.7;
          } else if (subjectResult === "B+") {
            return 3.3;
          } else if (subjectResult === "B") {
            return 3.0;
          } else if (subjectResult === "B-") {
            return 2.7;
          } else if (subjectResult === "C+") {
            return 2.3;
          } else if (subjectResult === "C") {
            return 2.0;
          } else if (subjectResult === "C-") {
            return 1.7;
          } else if (subjectResult === "D+") {
            return 1.3;
          } else if (subjectResult === "D") {
            return 1.0;
          } else if (subjectResult === "D-") {
            return 0.0;
          } else {
            return 0.0; // Default value if the subject result is not recognized
          }
        };

        // Check if the subject key already exists in the Set
        if (!userResults.has(subjectKey)) {
          const subjectGPA = calculateGPA(subjectResult);
          // Store the credit value, subject result, and GPA for each subject
          subjectCredits.push(creditCount);
          subjectResults.push(subjectResult);
          subjectGPAs.push(subjectGPA);
          userResults.add(subjectKey); // Add the subject key to the Set to mark it as visited
        }
      }
    }

    // Calculate the full GPA based on the subject GPAs and credit values
    let totalCredits = 0;
    let weightedGPASum = 0;

    for (let i = 0; i < subjectGPAs.length; i++) {
      const subjectGPA = subjectGPAs[i];
      const creditCount = subjectCredits[i];

      const weightedGPA = subjectGPA * creditCount;
      weightedGPASum += weightedGPA;

      totalCredits += creditCount;
    }

    const fullGPAValue = weightedGPASum / totalCredits;
    MATGPA.push(fullGPAValue);
    console.log(fullGPAValue);
  } catch (error) {
    // Handle error
  }
};

const Phygpa = () => {
  try {
    const user = req.user;
    const userResults = new Set(); // Create a Set to store unique results
    clearResultArrays(); // Clear the result arrays before processing

    // Loop through the user's results
    for (const result of user.results) {
      if (result.Stream === "Information and Communication Technology") {
        const subjectCode = result.CourseCode;

        // Function to extract the credit count from the subject code
        const getCreditCount = (subjectCode) => {
          const parts = subjectCode.split(" "); // Split the subject code by spaces
          if (parts.length >= 2) {
            const creditCountStr = parts[1]; // Get the credit count portion
            creditCount = parseFloat(creditCountStr); // Convert the credit count to a float number
            if (!isNaN(creditCount)) {
              return creditCount;
            }
          }
          return 0; // Return 0 if the credit count cannot be extracted or parsed
        };

        const creditCount = getCreditCount(subjectCode); // Get the credit count from the subject code
        const subjectResult = result.Grade;
        const subjectKey = result.CourseCode + result.SubjectName; // Create a unique key using subject code and name

        // Function to calculate GPA based on subject result
        const calculateGPA = (subjectResult) => {
          if (subjectResult === "A+") {
            return 4.0;
          } else if (subjectResult === "A") {
            return 4.0;
          } else if (subjectResult === "A-") {
            return 3.7;
          } else if (subjectResult === "B+") {
            return 3.3;
          } else if (subjectResult === "B") {
            return 3.0;
          } else if (subjectResult === "B-") {
            return 2.7;
          } else if (subjectResult === "C+") {
            return 2.3;
          } else if (subjectResult === "C") {
            return 2.0;
          } else if (subjectResult === "C-") {
            return 1.7;
          } else if (subjectResult === "D+") {
            return 1.3;
          } else if (subjectResult === "D") {
            return 1.0;
          } else if (subjectResult === "D-") {
            return 0.0;
          } else {
            return 0.0; // Default value if the subject result is not recognized
          }
        };

        // Check if the subject key already exists in the Set
        if (!userResults.has(subjectKey)) {
          const subjectGPA = calculateGPA(subjectResult);
          // Store the credit value, subject result, and GPA for each subject
          subjectCredits.push(creditCount);
          subjectResults.push(subjectResult);
          subjectGPAs.push(subjectGPA);
          userResults.add(subjectKey); // Add the subject key to the Set to mark it as visited
        }
      }
    }

    // Calculate the full GPA based on the subject GPAs and credit values
    let totalCredits = 0;
    let weightedGPASum = 0;

    for (let i = 0; i < subjectGPAs.length; i++) {
      const subjectGPA = subjectGPAs[i];
      const creditCount = subjectCredits[i];

      const weightedGPA = subjectGPA * creditCount;
      weightedGPASum += weightedGPA;

      totalCredits += creditCount;
    }

    const fullGPAValue = weightedGPASum / totalCredits;
    PHYGPA.push(fullGPAValue);
    console.log(fullGPAValue);
  } catch (error) {
    // Handle error
  }
};

//nevigate to home page
const HomePageView = async (req, res, next) => {
  res.render("studentViews/studentHomePage");
  calculatefullgpa();
  ICTgpa();
  Matgpa();
  Phygpa();
};

//nevigate to lecture details page
const LectureDetails = async (req, res, next) => {
  res.render("studentViews/lectureDetails");
};

//nevigate to complete result sheet page
const CompleteResultSheet = async (req, res, next) => {
  try {
    const user = req.user;
    const userResults = new Set(); // Create a Set to store unique results
    clearResultArrays(); // Clear the result arrays before processing

    // Loop through the user's results
    for (const result of user.results) {
      const subjectResult = result.Grade;

      let resultState;
      if (
        subjectResult === "A+" ||
        subjectResult === "A" ||
        subjectResult === "A-" ||
        subjectResult === "B+" ||
        subjectResult === "B" ||
        subjectResult === "B-" ||
        subjectResult === "C+" ||
        subjectResult === "C"
      ) {
        resultState = "Pass";
      } else if (
        subjectResult === "E" ||
        subjectResult === "D-" ||
        subjectResult === "D" ||
        subjectResult === "D+" ||
        subjectResult === "C-"
      ) {
        resultState = "Repeat";
      } else {
        // Handle other cases if needed
        console.log("result is not valied")
      }

      const subjectKey = result.CourseCode + result.SubjectName; // Create a unique key using subject code and name

      // Check if the subject key already exists in the Set
      if (!userResults.has(subjectKey)) {
        userResults.add(subjectKey); // Add the subject key to the Set to mark it as visited

        if (result.Year === "1st Year" && result.Semester === "1") {
          Results_y1_s1.push({
            subjectCode: result.CourseCode,
            subjectName: result.SubjectName,
            subjectResult: subjectResult,
            resultState: resultState,
          });
        } else if (result.Year === "1st Year" && result.Semester === "2") {
          Results_y1_s2.push({
            subjectCode: result.CourseCode,
            subjectName: result.SubjectName,
            subjectResult: subjectResult,
            resultState: resultState,
          });
        } else if (result.Year === "2nd Year" && result.Semester === "1") {
          Results_y2_s1.push({
            subjectCode: result.CourseCode,
            subjectName: result.SubjectName,
            subjectResult: subjectResult,
            resultState: resultState,
          });
        } else if (result.Year === "2nd Year" && result.Semester === "2") {
          Results_y2_s2.push({
            subjectCode: result.CourseCode,
            subjectName: result.SubjectName,
            subjectResult: subjectResult,
            resultState: resultState,
          });
        } else if (result.Year === "3rd Year" && result.Semester === "1") {
          Results_y3_s1.push({
            subjectCode: result.CourseCode,
            subjectName: result.SubjectName,
            subjectResult: subjectResult,
            resultState: resultState,
          });
        } else {
          Results_y3_s2.push({
            subjectCode: result.CourseCode,
            subjectName: result.SubjectName,
            subjectResult: subjectResult,
            resultState: resultState,
          });
        }
      }
    }
    res.render("studentViews/studentCompleteResultSheet", {
      Results_y1_s1,
      Results_y1_s2,
      Results_y2_s1,
      Results_y2_s2,
      Results_y3_s1,
      Results_y3_s2,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching Complete results");
  }
};

//nevigate to ict results sheet
const ICTResults = async (req, res, next) => {
  try {
    const user = req.user;
    const userResults = new Set(); // Create a Set to store unique results
    clearResultArrays(); // Clear the result arrays before processing

    // Loop through the user's results
    for (const result of user.results) {
      if (result.Stream === "Information and Communication Technology") {
        const subjectResult = result.Grade;

        let resultState;
      if (
        subjectResult === "A+" ||
        subjectResult === "A" ||
        subjectResult === "A-" ||
        subjectResult === "B+" ||
        subjectResult === "B" ||
        subjectResult === "B-" ||
        subjectResult === "C+" ||
        subjectResult === "C"
      ) {
        resultState = "Pass";
      } else if (
        subjectResult === "E" ||
        subjectResult === "D-" ||
        subjectResult === "D" ||
        subjectResult === "D+" ||
        subjectResult === "C-"
      ) {
        resultState = "Repeat";
      } else {
        // Handle other cases if needed
        console.log("result is not valied")
      }

        const subjectKey = result.CourseCode + result.SubjectName; // Create a unique key using subject code and name

        // Check if the subject key already exists in the Set
        if (!userResults.has(subjectKey)) {
          userResults.add(subjectKey); // Add the subject key to the Set to mark it as visited

          if (result.Year === "1st Year" && result.Semester === "1") {
            Results_y1_s1.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "1st Year" && result.Semester === "2") {
            Results_y1_s2.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "2nd Year" && result.Semester === "1") {
            Results_y2_s1.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "2nd Year" && result.Semester === "2") {
            Results_y2_s2.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "3rd Year" && result.Semester === "1") {
            Results_y3_s1.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else {
            Results_y3_s2.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          }
        }
      }
    }
    res.render("studentViews/studentICT", {
      Results_y1_s1,
      Results_y1_s2,
      Results_y2_s1,
      Results_y2_s2,
      Results_y3_s1,
      Results_y3_s2,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching ICT results");
  }
};

//nevigate to smaths results sheet
const MathResults = async (req, res, next) => {
  try {
    const user = req.user;
    const userResults = new Set(); // Create a Set to store unique results
    clearResultArrays(); // Clear the result arrays before processing

    // Loop through the user's results
    for (const result of user.results) {
      if (result.Stream === "Mathamatics") {
        const subjectResult = result.Grade;
        
        let resultState;
      if (
        subjectResult === "A+" ||
        subjectResult === "A" ||
        subjectResult === "A-" ||
        subjectResult === "B+" ||
        subjectResult === "B" ||
        subjectResult === "B-" ||
        subjectResult === "C+" ||
        subjectResult === "C"
      ) {
        resultState = "Pass";
      } else if (
        subjectResult === "E" ||
        subjectResult === "D-" ||
        subjectResult === "D" ||
        subjectResult === "D+" ||
        subjectResult === "C-"
      ) {
        resultState = "Repeat";
      } else {
        // Handle other cases if needed
        console.log("result is not valied")
      }

        const subjectKey = result.CourseCode + result.SubjectName; // Create a unique key using subject code and name

        // Check if the subject key already exists in the Set
        if (!userResults.has(subjectKey)) {
          userResults.add(subjectKey); // Add the subject key to the Set to mark it as visited

          if (result.Year === "1st Year" && result.Semester === "1") {
            Results_y1_s1.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "1st Year" && result.Semester === "2") {
            Results_y1_s2.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "2nd Year" && result.Semester === "1") {
            Results_y2_s1.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "2nd Year" && result.Semester === "2") {
            Results_y2_s2.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "3rd Year" && result.Semester === "1") {
            Results_y3_s1.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else {
            Results_y3_s2.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          }
        }
      }
    }
    res.render("studentViews/studentMathamatics", {
      Results_y1_s1,
      Results_y1_s2,
      Results_y2_s1,
      Results_y2_s2,
      Results_y3_s1,
      Results_y3_s2,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching Maths results");
  }
};

//nevigate to physics results sheet
const PhysicsResults = async (req, res, next) => {
  try {
    const user = req.user;
    const userResults = new Set(); // Create a Set to store unique results
    clearResultArrays(); // Clear the result arrays before processing

    // Loop through the user's results
    for (const result of user.results) {
      if (result.Stream === "Physics") {
        const subjectResult = result.Grade;
        
        let resultState;
      if (
        subjectResult === "A+" ||
        subjectResult === "A" ||
        subjectResult === "A-" ||
        subjectResult === "B+" ||
        subjectResult === "B" ||
        subjectResult === "B-" ||
        subjectResult === "C+" ||
        subjectResult === "C"
      ) {
        resultState = "Pass";
      } else if (
        subjectResult === "E" ||
        subjectResult === "D-" ||
        subjectResult === "D" ||
        subjectResult === "D+" ||
        subjectResult === "C-"
      ) {
        resultState = "Repeat";
      } else {
        // Handle other cases if needed
        console.log("result is not valied")
      }

        const subjectKey = result.CourseCode + result.SubjectName; // Create a unique key using subject code and name

        // Check if the subject key already exists in the Set
        if (!userResults.has(subjectKey)) {
          userResults.add(subjectKey); // Add the subject key to the Set to mark it as visited

          if (result.Year === "1st Year" && result.Semester === "1") {
            Results_y1_s1.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "1st Year" && result.Semester === "2") {
            Results_y1_s2.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "2nd Year" && result.Semester === "1") {
            Results_y2_s1.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "2nd Year" && result.Semester === "2") {
            Results_y2_s2.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else if (result.Year === "3rd Year" && result.Semester === "1") {
            Results_y3_s1.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          } else {
            Results_y3_s2.push({
              subjectCode: result.CourseCode,
              subjectName: result.SubjectName,
              subjectResult: subjectResult,
              resultState: resultState,
            });
          }
        }
      }
    }
    res.render("studentViews/studentPhysics", {
      Results_y1_s1,
      Results_y1_s2,
      Results_y2_s1,
      Results_y2_s2,
      Results_y3_s1,
      Results_y3_s2,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching Physics results");
  }
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
  ApplyRecorrection,
};
