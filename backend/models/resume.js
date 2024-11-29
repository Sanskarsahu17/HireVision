const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Applicant's name
  email: { type: String, required: true ,unique: true}, // Applicant's email
  resumePath: { type: String, required: true }, // Path to the uploaded resume
  uploadedAt: { type: Date, default: Date.now }, // Timestamp
});

module.exports = mongoose.model('Resume_nexusAI', resumeSchema);