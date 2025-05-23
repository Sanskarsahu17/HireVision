import { useState, useEffect } from 'react';
import { dashboardService,getInterviewList } from '../services/dashboardService';

export const useDashboardData = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await dashboardService();
        setApplications(data.userProfile); // Assuming the response is an array of applications
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading once the request is complete
      }
    };

    fetchDashboardData();
  }, []); // Runs once when the component mounts

  return { applications, error, loading };
};


export const getInterviews = () =>{
  const [interviews, setInterviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fectchInterviewList = async()=>{
      try{
        const data = await getInterviewList();
        setInterviews(data.interViewList);
        console.log("SelectedInterview ",data.interViewList);
      }
      catch(err){
        console.log(err);
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
    };
    fectchInterviewList();
  },[])
  console.log("hooks log interiview: ",interviews);
  return {interviews, loading, error};
};