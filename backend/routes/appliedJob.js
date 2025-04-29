const express = require('express');
const appliedJobs = require('../models/appliedJobs');
const upload = require('../middleware/uploadMiddlewareS3');
const jwt = require('jsonwebtoken');
const authenticateJWT = require('../middleware/authenticateJWT');


const router = express.Router();

router.post('/submit-form', authenticateJWT, upload.single('resume'), async (req, res) => {
  try {

    // if(appliedJobs.findOne({email})){
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: 'Authentication token is missing' });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email; // Assuming the token contains the `email` field
    console.log("Req-body", req.body);
    // }
    const { requirements, jobPosition, company, recruiterEmail, jobId } = req.body

    // const {requirements,jobPosition} = req.body;
    // const requirements = 'Hello';
    // const jobPosition = 'hwllo';

    // This is for the local upload (Date: 28/04/25 , Sanskar is commenting this, instead we are moving to AWS S3 storage)
    // const resumePath = req.resumePath;

    // This is for AWS s3 storage

    let resumePath;

    // New handling: If file is uploaded to S3
    if (req.file && req.file.key) {
      resumePath = req.file.key; // Full S3 URL
    } else {
      return res.status(400).json({ message: 'Resume upload failed' });
    }

    // Save details in the db
    const newApplication = new appliedJobs({
      jobId,
      email,
      resumePath, // Path of uploaded file
      requirements,
      jobPosition,
      company,
      recruiterEmail,
    });

    await newApplication.save();
    res.status(201).json({ message: 'Resume uploaded successfully!', newApplication });
  } catch (error) {

    res.status(500).json({ message: error.message });
  }
});

// router.get('/getStatus',Register);

module.exports = router;