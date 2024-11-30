const appliedJobs = require('../models/appliedJobs');


const submit = async(req,res)=>{
    const{name,email} = req.user;
    const {resume} = req.body;
    if(!resume){
        return res.status(400).json({ error: 'Resume is required' });
    }
    res.status(200).json({
        message: 'Form submitted successfully',
        user: { name, email },
      });
};