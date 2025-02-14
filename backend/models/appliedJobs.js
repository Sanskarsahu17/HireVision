const mongoose = require('mongoose');

const appliedJobs = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true }, // Foreign key reference to Job
  email: { type: String, required: true }, // Applicant's email
  resumePath: { type: String, required: true }, // Path to the uploaded resume
  uploadedAt: { type: Date, default: Date.now }, // Timestamp
  requirements: {type: String, required: true}, // Job requirements
  company:{type:String,required: true}, //company
  jobPosition: {type: String,required:true}, // job position
  applicaitonStatus: { 
    type: Number, 
    required: true, 
    enum: [0, 1, 2, 3, 4], // 0: under-review 1: shortlisted 2: Interview-scheduled 3:Selected 4: Rejected
    default: 0 
  },
  recruiterEmail:{type: String,required:true},
});
appliedJobs.index({ email: 1, jobId: 1 }, { unique: true });
module.exports = mongoose.model('appliedJobs_nexusAI', appliedJobs);