import React, { useState } from "react";
import Sidebar from "../../SideBar";
import JobCard from "./JobCard";
import JobModal from "./JobModal";
import { toast } from "react-hot-toast";
import { usePostedJobs } from "../../../../hooks/hrDashboard";
import axios from "axios";


// const initialJobs = [
//   {
//     id: 1,
//     title: "Senior Frontend Developer",
//     department: "Engineering",
//     location: "Remote",
//     type: "full-time",
//     applicants: 45,
//     posted: "5 days ago",
//     status: "Active",
//     description: "We are looking for an experienced Frontend Developer...",
//     requirements: [
//       "5+ years of experience with React",
//       "Strong TypeScript skills",
//       "Experience with modern build tools",
//     ],
//     responsibilities: [
//       "Lead frontend development initiatives",
//       "Mentor junior developers",
//       "Architect scalable solutions",
//     ],
//     benefits: ["Competitive salary", "Remote work", "Health insurance"],
//   },
//   {
//     id: 2,
//     title: "Product Designer",
//     department: "Design",
//     location: "New York, NY",
//     type: "Full-time",
//     applicants: 28,
//     posted: "2 days ago",
//     status: "Active",
//     description: "Join our design team to create amazing user experiences...",
//     requirements: [
//       "3+ years of product design experience",
//       "Proficiency in Figma",
//       "Strong portfolio",
//     ],
//     responsibilities: [
//       "Create user-centered designs",
//       "Conduct user research",
//       "Collaborate with developers",
//     ],
//     benefits: ["Competitive salary", "Creative environment", "Career growth"],
//   },
// ];

export default function JobPostings() {
  const { jobs, setJobs, loading, error } = usePostedJobs();
  // const [jobs, setJobs] = useState(initialJobs);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  console.log("Hello",jobs.jobList);
  console.log(error);
  const handleModal = (job = null) => {
    setEditingJob(job);
    setIsModalOpen(!isModalOpen);
  };

  const handleSaveJob = async(jobData,e) => {
    console.log(jobData)
    if (editingJob) {
      // Update existing job
      // Patch data
    } else {
      // Create new job
      // Post data
      try{
        const response = await axios.post(
          "http://localhost:5000/api/hr-dashboard/job-posting",
          jobData,
          {
            withCredentials: true
          }
        );
        console.log("Response: ",response);
      }
      catch(error){
        console.error("creating job failed", error);
        toast.error("Create job failed. Please try again.");
      }

    }
    handleModal();
  };

  const handleDeleteJob = (jobId) => {
    if (window.confirm("Are you sure you want to delete this job posting?")) {
      setJobs(jobs.filter((job) => job.id !== jobId));
      toast.success("Job deleted successfully!");
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
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onEdit={() => handleModal(job)}
                onDelete={handleDeleteJob}
              />
            ))}
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
