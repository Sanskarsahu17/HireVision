import { useState, useEffect } from 'react';
import axios from "axios";
import { toast } from "react-hot-toast";
import { hrInfo } from '../services/HRService';

export const useHRData = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHRData = async () => {
      try {
        const data = await hrInfo();
        setApplications(data); // Assuming the response is an array of applications
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false); // Stop loading once the request is complete
      }
    };

    fetchHRData();
  }, []); // Runs once when the component mounts

  return { applications, error, loading };
};

export const usePostedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchJobs = async () => {
        setLoading(true);
        try {
          const response = await axios.get("http://localhost:3000/api/jobs", {
            withCredentials: true, // Include credentials (cookies) if required
          });
          setJobs(response); // Assuming the API returns jobs in `jobs` field
          setError(null);
        } catch (err) {
          console.error("Error fetching jobs:", err);
          setError(err.message || "Failed to fetch jobs.");
          toast.error("Failed to fetch job postings.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchJobs();
    }, []);
  
    return { jobs, setJobs, loading, error };
  };