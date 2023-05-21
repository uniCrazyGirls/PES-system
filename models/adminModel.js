const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  // User index number
  indexNumber: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  // Result details
  subjectName: {
    type: String,
    required: true
  },
  // Result details
  subjectStream: {
    type: String,
    required: true
  },
  // Result details
  subjectYear: {
    type: String,
    required: true
  },
  // Result details
  subjectSemester: {
    type: String,
    required: true
  },
  
});

const AdminModel = mongoose.model('AdminModel', adminSchema);

module.exports = AdminModel;
