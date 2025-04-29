import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Sidebar from "../../SideBar";
import JobCard from "./JobCard";
import JobModal from "./JobModal";

import { usePostedJobs } from "../../../../hooks/hrDashboard";


export default function JobPostings() {
  useEffect(() => {
    // Fetch jobs only on mount or when dependencies change
    // Example: fetchJobs() should be your function that gets jobs and calls setJobs
    // If usePostedJobs already fetches jobs, you may not need this, but if not:
    // fetchJobs();
    // If jobs are fetched elsewhere, remove this block.
  }, []);
  const { jobs, setJobs,  } = usePostedJobs();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  
  // useEffect(() => {
  //   console.log("Job Lists: ", jobs);
  // }, [jobs]);

  const handleModal = (job = null) => {
    setEditingJob(job);
    setIsModalOpen(!isModalOpen);
  };

  const handleSaveJob = async (jobData, e) => {
    console.log(jobData);
    if (editingJob) {
      // Update existing job
      // Patch data
      try {
        // Make the PUT request to update the job
        const response = await axios.put(
          `http://localhost:5000/api/hr-dashboard/updateJob/${editingJob._id}`,
          jobData,
          { withCredentials: true }
        );
        // onUpdate(response.data.updatedJob); // Update the parent component state with the updated job
        console.log("Update response: ", response);
        alert("Job updated successfully");
      } catch (error) {
        console.error("Error updating the job:", error);
        alert("Failed to update the job");
      }
    } else {
      // Create new job
      // Post data
      try {
        const response = await axios.post(
          "http://localhost:5000/api/hr-dashboard/job-posting",
          jobData,
          {
            withCredentials: true,
          }
        );
        console.log("Response: ", response);
      } catch (error) {
        console.error("creating job failed", error);
        toast.error("Create job failed. Please try again.");
      }
    }
    handleModal();
  };

  const handleDeleteJob = async (jobId) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/hr-dashboard/deleteJob/${jobId}`,
          { withCredentials: true }
        );
        console.log("DElete job response: ", response);
        setJobs(jobs.filter((job) => job._id !== jobId));
        toast.success(response);
      } catch (error) {
        console.log('error in job posting', error);
      }
    }
  };

  return (
    <div className='min-h-screen bg-slate-900'>
      <Sidebar />
      <main className='ml-64 p-8'>
        <div className='max-w-5xl mx-auto'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold text-white'>Job Postings</h1>
            <button
              onClick={() => handleModal()}
              className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors'
            >
              Create New Job
            </button>
          </div>

          <div className='space-y-6'>
            {jobs.length === 0 ? (
              <h1>Currently, you&apos;ve not posted any jobs !</h1>
            ) : (
              jobs.map((job) => (
                <JobCard
                  key={job._id}
                  job={job}
                  onEdit={() => handleModal(job)}
                  onDelete={handleDeleteJob}
                />
              ))
            )}
          </div>
        </div>
      </main>

      {isModalOpen && (
        <JobModal
          onClose={() => handleModal()}
          onSave={handleSaveJob}
          job={editingJob}
        />
      )}
    </div>
  );
}
