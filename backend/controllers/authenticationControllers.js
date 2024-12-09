const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Login Logic
const Login = async(req,res)=>{
    const { email, password } = req.body;

    try {
      if (!email || !password) {
          console.error('Email or password missing in request');
          return res.status(400).json({ message: 'Email and password are required' });
      }

      const user = await User.findOne({ email });
      if (!user) {
          console.log('User not found');
          return res.status(400).json({ message: 'User not found' });
      }

      if (!user.password) {
          console.error('User password is undefined');
          return res.status(500).json({ message: 'Server error: invalid user password' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          console.log('Invalid credentials');
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      if (!process.env.JWT_SECRET) {
          console.error('JWT_SECRET is not defined');
          return res.status(500).json({ message: 'JWT secret missing' });
      }

      const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
  } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Error logging in', error: error.message });
  }

}

//Register Logic
const Register = async(req,res)=>{
    const { name, email, password,userType,companyName } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });
    console.log("New User Registered")
    const hashedPassword = await bcrypt.hash(password, 10);

    const info = {
      name,
      email,
      password: hashedPassword,
      user_role: userType,
      ...(userType === "recruiter" && { companyName }),
    }
    
    const newUser = new User(info);
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error registering user', error });
  }
}

module.exports = {Login,Register};
