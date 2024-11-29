const mongoose = require('mongoose');

// Replace <username>, <password>, and <dbname> with your details
const uri = process.env.DB_URI;



async function connectDB() {
    try {
      await mongoose.connect(uri);
      console.log('MongoDB Atlas connected successfully!');
    } catch (err) {
      console.error('Failed to connect to MongoDB Atlas:', err.message);
      process.exit(1);
    }
  }

connectDB();

module.exports = connectDB;