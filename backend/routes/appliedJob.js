const express = require('express');
const appliedJobs = require('../models/appliedJobs');
const upload = require('../middleware/uploadMiddleware');
const authenticateJWT = require('../middleware/authenticateJWT');


const router = express.Router();

router.post('/submit-form', authenticateJWT,upload.single('resume'), async(req, res) => {
    try{
        const {email } = req.user; // Extracted from token

        
        // const {requirements,jobPosition} = req.body;
        const requirements = 'Hello';
        const jobPosition = 'hwllo';
        const resumePath = req.resumePath;
        
        // Save details in the db
        const newApplication = new appliedJobs({
            email,
            resumePath, // Path of uploaded file
            requirements,
            jobPosition,
          });

          await newApplication.save();
          res.status(201).json({ message: 'Resume uploaded successfully!', newApplication });
    }catch(error){
        res.status(500).json({ message: error.message });
    }
  });

// router.get('/getStatus',Register);

module.exports = router;