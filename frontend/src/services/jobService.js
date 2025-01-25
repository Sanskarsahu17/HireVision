import axios from 'axios';

const API_URL = 'http://localhost:5000/api/dashboard/getJobs'; // Replace with your actual backend API URL

// Service to fetch all job posts
export const fetchJobs = async () => {
  try {
    const response = await axios.get(`${API_URL}`, { withCredentials: true });
    return response.data.jobs;
  } catch (error) {
    console.error('Error fetching jobs:', error.response?.data?.message || error.message);
    throw error;
  }
};
