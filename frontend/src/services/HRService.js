import axios from 'axios';

export const hrInfo = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/hr-dashboard/HR-info', {
      withCredentials: true, // Include cookies in the request
    });
    return response.data; // Axios automatically parses JSON responses
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const createJob = async() =>{
  try{
    const response = await axios.post('http://localhost:5000/api/hr-dashboard/job-posting', {
      withCredentials: true, // Include cookies in the request
    });
    return response.data; // Axios automatically parses JSON responses
  } catch(error){
    console.error("Error in creating job")
  }
}