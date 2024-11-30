const mongoose = require('mongoose');
require('dotenv').config();
// Replace <username>, <password>, and <dbname> with your details
const uri = process.env.DB_URI;



const connectDB=async()=>{
    try {
      // console.log(uri)
      await mongoose.connect(uri);
      console.log('MongoDB Atlas connected successfully!');
    } catch (err) {
      console.error('Failed to connect to MongoDB Atlas:', err.message);
      process.exit(1);
    }
  }

module.exports = connectDB;