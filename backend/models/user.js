const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  user_role: { 
    type: String, 
    required: true, 
    enum: ['candidate', 'recruiter'], 
    default: 'candidate' 
  },
  companyName: { 
    type: String, 
    required: function () { return this.user_role === 'recruiter'; } 
  },
});

module.exports = mongoose.model('User_nexusAI', UserSchema);
