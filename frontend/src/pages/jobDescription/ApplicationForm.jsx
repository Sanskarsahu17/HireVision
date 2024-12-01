import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function ApplicationForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state.job; // Get job data from the state
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');
  // console.log(job);

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('resume', resume);
    // formData.append('message', message);
    // formData.append('jobId', job.id); // Include job ID or any other relevant data
    formData.append('company',job.company);
    formData.append('requirements',job.requirements);
    formData.append('jobPosition',job.title);
    
    try {
      const token = Cookies.get('token'); 
      console.log(job.company)
      
      if(!token) console.log("No jwttoken") ;
      const response = await axios.post('http://localhost:5000/api/jobApplication/submit-form', formData, {
        headers: { 
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
         },
        
      });
      
      setMessage(response.data.message);
      console.log("Success");
      navigate('/candidate/dashboard');
    } catch (error) {
      // setMessage('Error uploadng resume');
      console.log("Error: ",error.response.data);
      setMessage(error.response.data.message)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className='max-w-md mx-auto p-8 bg-gray-800 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold text-white mb-4'>Apply for {job.title}</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-white mb-2' htmlFor='resume'>
              Upload your Resume
            </label>
            <input
              type='file'
              id='resume'
              accept='.pdf,.doc,.docx'
              onChange={(e) => setResume(e.target.files[0])}
              required
              className='block w-full text-gray-900 p-2 rounded'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-white mb-2' htmlFor='message'>
              Why do you want to apply?
            </label>
            <textarea
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className='block w-full text-white p-2 rounded'
              rows='4'
            ></textarea>
          </div>
          <button
            type='submit'
            className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded'
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
}