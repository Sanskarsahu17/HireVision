const mongoose = require('mongoose');

const appliedJobs = new mongoose.Schema({
  
  email: { type: String, required: true ,unique: true}, // Applicant's email
  resumePath: { type: String, required: true }, // Path to the uploaded resume
  uploadedAt: { type: Date, default: Date.now }, // Timestamp
  requirements: {type: String, required: true}, // Job requirements
  company:{type:String,required: true}, //company
  jobPosition: {type: String,required:true}, // job position
});

module.exports = mongoose.model('appliedJobs_nexusAI', appliedJobs);