const jwt = require('jsonwebtoken');
const user = require('../models/user'); // Replace with your model path
const Job = require('../models/jobs');
const appliedJobs = require('../models/appliedJobs');
const axios = require("axios"); // For sending HTTP requests
const InterviewResult = require('../models/interviewResult');

const getQuestions = async(req,res)=>{
    try{
        const token = req.cookies.token;
        const jobId = req.body.jobId;
        const conversationLogs = req.body.conversationLogs;
         
        if (!token) {
          return res.status(401).json({ message: 'Authentication token is missing' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email; // Assuming the token contains the `email` field
        if (!email) {
          return res.status(400).json({ message: 'Invalid token' });
        }
        console.log("JobId: ",jobId);
        console.log(conversationLogs);
        console.log("email: ",email);
        const jobApplication = await appliedJobs.findOne({jobId: jobId, email: email});
        if(!jobApplication){
          res.status(500).json({message: 'Applicant not found'});   
        }
        const jobPosition = jobApplication.jobPosition;
        const resumePath = jobApplication.resumePath;

        const response = await axios.post('http://127.0.0.1:5001/interviews',{
          jobPosition,
          resumePath,
          conversationLogs,
        });
        const response_data = response.data;
        
        res.status(200).json({
          response_data
        })
    }
    catch(error){
      console.error("Error in generating question:", error);
      res.status(500).json({ error: "Internal server error", details: error.message });
    }
}

const getScoreInterview = async(req,res)=>{
  try{
    const token = req.cookies.token;
    const jobId = req.body.jobId;
    const conversation_logs = req.body.conversationLogs;
    if(!token){
      res.status(401).json({message: "Authentication token is missing!"});
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;
    if(!email){
      return res.status(400).json({ message: 'Invalid token' });
    }
    const jobApplication = await appliedJobs.findOne({jobId: jobId, email: email});
    const jobPosition = jobApplication.jobPosition;
    const resumePath = jobApplication.resumePath;
    const result = await axios.post('http://127.0.0.1:5001/getInterviewScore',{
      resumePath,
      conversation_logs,
      jobPosition,
    })

    const scores = result.data.question.map(Number); // Convert string to numbers
    const totalScore = scores.reduce((acc, val) => acc + val, 0);
    const interviewResult = new InterviewResult({
      email,
      jobId,
      jobPosition,
      resumePath,
      scores,
      totalScore,
    });

    await interviewResult.save();
    console.log("Saved interview result:", interviewResult);
    res.status(200).json({message:"Score uploaded successfully"});
  }
  catch(error){
    console.error("Error in getting score:", error);
    res.status(500).json({error: "Internal Server Error",details: error.message});
  }
}

module.exports={getScoreInterview,getQuestions};