const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  IndexNo: {
    type: String,
    required: true,
  },
  Grade: {
    type: String,
    required: true,
  },
  // Result details
  Semester: {
    type: String,
    required: true,
  },
  // Result details
  SubjectName: {
    type: String,
    required: true,
  },
  // Result details
  CourseCode: {
    type: String,
    required: true,
  },
  // Result details
  Year: {
    type: String,
    required: true,
  },
  // Result details
  Stream: {
    type: String,
    required: true,
  },
});

const AdminModel1 = mongoose.model("AdminModel1", adminSchema);

module.exports = AdminModel1;
