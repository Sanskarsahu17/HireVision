const mongoose = require('mongoose');

const interviewResultSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  jobId: {
    type: String,
    required: true,
  },
  jobPosition: {
    type: String,
    required: true,
  },
  resumePath: {
    type: String,
    required: true,
  },
  scores: {
    type: [Number], // array of individual scores
    required: true,
  },
  totalScore: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('InterviewResult', interviewResultSchema);
