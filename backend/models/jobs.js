const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["full-time", "part-time", "contract", "internship"], // restrict to specific job types
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (value) {
        // Regex for validating email
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: "Please provide a valid email address.",
    },
  },
  salaryMin: {
    type: Number,
    required: false,
    min: 0,
  },
  salaryMax: {
    type: Number,
    required: false,
    min: 0,
    validate: {
      validator: function (value) {
        return value >= this.salaryMin; // salaryMax must be greater than or equal to salaryMin
      },
      message: "Max salary must be greater than or equal to min salary.",
    },
  },
  company: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  requirements: {
    type: [String], // array of strings
    required: true,
  },
  responsibilities: {
    type: [String], // array of strings
    required: true,
  },
  benefits: {
    type: [String], // array of strings
    required: false, // optional
  },
  createdAt: {
    type: Date,
    default: Date.now, // automatically set the creation timestamp
  },
  updatedAt: {
    type: Date,
    default: Date.now, // automatically set the update timestamp
  },
});

jobSchema.pre("save", function (next) {
  this.updatedAt = Date.now(); // update the `updatedAt` field on every save
  next();
});

module.exports = mongoose.model("Job", jobSchema);
