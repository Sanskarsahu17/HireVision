const jwt = require('jsonwebtoken');
const user = require('../models/user'); // Replace with your model path
const Job = require('../models/jobs');
const appliedJobs = require('../models/appliedJobs');
const axios = require("axios"); // For sending HTTP requests

const getHR = async(req,res)=>{
    try {
        // 1. Extract token from cookies
        const token = req.cookies.token;
    
        if (!token) {
          return res.status(401).json({ message: 'Authentication token is missing' });
        }
    
        // 2. Verify and decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email; // Assuming the token contains the `email` field
    
        if (!email) {
          return res.status(400).json({ message: 'Invalid token' });
        }
    
        // 3. Query MongoDB with the extracted email
        const userProfile = await user.find({ email });
        
    
        if (!userProfile || userProfile.length === 0) {
          return res.status(404).json({ message: 'No user for this email' });
        }
    
        // 4. Return the applications
        res.status(200).json({ message: 'Applications retrieved successfully', userProfile });
      } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
      }
}

const createJob = async(req,res)=>{
    try {
      console.log(req.body); 
        const {
            title,
            department,
            location,
            type,
            salaryMin,
            salaryMax,
            description,
            requirements,
            responsibilities,
            benefits,
          } = req.body;
        // 1. Extract token from cookies
        const token = req.cookies.token;
    
        if (!token) {
          return res.status(401).json({ message: 'Authentication token is missing' });
        }
    
        // 2. Verify and decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email; // Assuming the token contains the `email` field
        const users = await user.findOne({ email }).select('companyName').lean();
        const company = users.companyName;
        console.log("Comapny: ",company)
        // console.log(decoded);
    
        if (!email) {
          return res.status(400).json({ message: 'Invalid token' });
        }
       
        const newJob = new Job({
        title,
        department,
        location,
        type,
        email,
        company,
        salaryMin,
        salaryMax,
        description,
        requirements,
        responsibilities,
        benefits,
        });
        await newJob.save();
        console.log("hello");
        // 4. Return the applications
        res.status(200).json({ message: 'Job created successfully'});
      } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
      }
}

const updateJob = async (req, res) => {
  try {
    // 1. Extract token from cookies
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication token is missing' });
    }
    
    // 2. Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email; // Assuming the token contains the `email` field
    
    if (!email) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    // 3. Extract job ID and update data from request
    const { jobId } = req.params;
    const updateData = req.body; // Assuming job details are passed in the body
    console.log("Received Data: ",updateData);
    console.log("Job Id: ",jobId);
    // 4. Find and update the job based on the job ID and user's email
    const updatedJob = await Job.findOneAndUpdate(
      { _id: jobId, email }, 
      updateData, 
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found or not authorized to update' });
    }

    res.status(200).json({ message: 'Job updated successfully', updatedJob });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    // 1. Extract token from cookies
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication token is missing' });
    }
    
    // 2. Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email; // Assuming the token contains the `email` field
    
    if (!email) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    // 3. Extract job ID from the request params
    const { jobId } = req.params;

    // 4. Find and delete the job based on the job ID and the user's email
    const job = await Job.findOneAndDelete({ _id: jobId, email });

    if (!job) {
      return res.status(404).json({ message: 'Job not found or not authorized to delete' });
    }

    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};


const getCandidate = async(req,res)=>{
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({ message: 'Authentication token is missing' });
          }
      
          // 2. Verify and decode the token
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const email = decoded.email; // Assuming the token contains the `email` field
          if (!email) {
            return res.status(400).json({ message: 'Invalid token' });
          }
      
          // 3. Query MongoDB with the extracted email
          const userProfile = await user.find({ email });
          if (!userProfile || userProfile.length === 0) {
            return res.status(404).json({ message: 'No user for this email' });
          }
          const company = userProfile.companyName;

          const AppliedJobs = await appliedJobs.find({company});
          res.status(200).json({ AppliedJobs });

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

const checkEligibility = async (req, res) => {
    try {
      // 1. Get JWT token from cookies
      const token = req.cookies.token;
      if (!token) {
        return res.status(401).json({ error: "Authentication token not found" });
      }
  
      // 2. Decode the token to get the email
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userEmail = decodedToken.email;
      console.log(userEmail);
  
      // 3. Fetch the company name from the User model using the email
      // const User = await user.findOne({ email: userEmail });
      // if (!User) {
      //   return res.status(404).json({ error: "User not found" });
      // }
      // const companyName = User.company;

      3. // we need to have recruiter email to have all records of unlisted students;


  
      // 4. Fetch all the appliedJobs for the company
      const AppliedJob = await appliedJobs.find({ recruiterEmail:userEmail, applicaitonStatus:0 });
      if (!AppliedJob || AppliedJob.length === 0) {
        return res.status(404).json({ error: "No applied jobs found for the company" });
      }
  
      // 5. Iterate through each appliedJob and send it to the external server
      // const updatedJobs = await Promise.all(
      //   AppliedJob.map(async (job) => {
      //     try {
      //       // Send a GET request with the job object
      //       const response = await axios.post("http://localhost:5001/eligibility", {
      //         resumePath : job.resumePath,
      //         jobPosition : job.jobPosition,
      //         job_requirement : job.requirements,
      //       });
  
      //       const isApplicable = response.data.answer; // Assume the response contains `answer` field
      //       if (isApplicable === '1') {
      //         job.applicaitonStatus = 2; // Change status to 2 for applicable
      //       } else {
      //         job.applicaitonStatus = 0; // Change status to 0 for not applicable
      //       }
  
      //       await job.save(); // Save updated job
      //       return job; // Return updated job
      //     } catch (error) {
      //       console.error(`Error processing job ${job._id}:`, error.message);
      //       return null; // Return null for failed requests
      //     }
      //   })
      // );

    console.log(AppliedJob);
  
      // Filter out any failed updates (null values)
      // const successfulUpdates = updatedJobs.filter((job) => job !== null);
  
      res.status(200).json({
        message: "Eligibility check completed.",
        // updatedJobs: successfulUpdates,
        data: AppliedJob
      });
    } catch (error) {
      console.error("Error in checkEligibility:", error.message);
      res.status(500).json({ error: "Internal server error", details: error.message });
    }
  };

const getJobs = async(req,res)=>{
  try{
    // 1. Extract token from cookies
    const token = req.cookies.token;
    
    if (!token) {
      return res.status(401).json({ message: 'Authentication token is missing' });
    }
     // 2. Verify and decode the token
     const decoded = jwt.verify(token, process.env.JWT_SECRET);
     const email = decoded.email; // Assuming the token contains the `email` field
 
     if (!email) {
       return res.status(400).json({ message: 'Invalid token' });
     }
     // 3. Query MongoDB with the extracted email
     const jobList = await Job.find({email});
     

     if (!jobList || jobList.length === 0) {
      return res.status(404).json({ message: 'No Jobs have been created' });
    }
    res.status(200).json({ message: 'Applications retrieved successfully', jobList });

  }
  catch(error){
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
}

  module.exports = {getHR,getCandidate,createJob,checkEligibility,getJobs,updateJob,deleteJob};