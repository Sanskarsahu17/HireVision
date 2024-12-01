const express = require('express');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const pdfParse = require('pdf-parse');
const authenticateJWT = require('../middleware/authenticateJWT');
const appliedJob = require('../models/appliedJobs');
const router = express.Router();

router.post('/eligibility',authenticateJWT,async(req,res)=>{
    try{
        const {email} = req.user;
        const userData = await appliedJob.findOne({email});
        if (!userData) {
            return res.status(404).json({ message: 'No job application found for this email.' });
          }
        const { resumePath,jobPosition,requirements } = userData;
        const response = await axios.post('http://127.0.0.1:5001/eligibility', {
            resumePath,
            jobPosition,
            requirements,
          }); 
        // Handle response from Flask
        const extractedData = response.data;

        res.status(200).json({
        message: 'Eligibility',
        data: extractedData,
        });
        
    }catch(error){
        console.error('Error extracting text from resume:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    
    
});

router.get('/assesment',authenticateJWT,async(req,res)=>{
    try{
        const {email} = req.user;
        const userData = await appliedJob.findOne({email});
        if (!userData) {
            return res.status(404).json({ message: 'No job application found for this email.' });
          }
        const { resumePath,jobPosition,requirements } = userData;
        const response = await axios.post('http://127.0.0.1:5001/questions', {
            resumePath,
            jobPosition,
            requirements,
          }); 
        // Handle response from Flask
        const extractedData = response.data;
          console.log(extractedData.questions[0]);
        res.status(200).json({
        extractedData
        });
        
    }catch(error){
        console.error('Error extracting text from resume:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    
    
});

module.exports = router;