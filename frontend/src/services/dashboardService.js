import axios from 'axios';

export const dashboardService = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/dashboard/candidate', {
      withCredentials: true, // Include cookies in the request
    });
    return response.data; // Axios automatically parses JSON responses
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
