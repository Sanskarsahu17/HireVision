import { useState, useEffect } from 'react';
import { fetchJobs } from '../services/jobService';

export const useJobs1 = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getJobs = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch jobs');
      } finally {
        setLoading(false);
      }
    };

    getJobs();
  }, []);

  return { jobs, loading, error };
};


