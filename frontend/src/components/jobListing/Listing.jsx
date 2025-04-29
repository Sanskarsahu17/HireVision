import React from "react";
import JobCard from "./JobCard";
// import CallToAction from "./CallToAction";
import {useJobs1} from "../../hooks/useJobs1";

export default function Listings() {
  // const { jobs, searchTerm, setSearchTerm, location, setLocation } = useJobs();
  const {jobs,loading,error} = useJobs1();
  return (
    <main className='max-w-6xl mx-auto px-4 py-12'>
      <div className='grid gap-6'>
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job._id} {...job} />)
        ) : (
          <div className='text-center py-12'>
            <p className='text-slate-400 text-lg'>
              No jobs found matching your criteria. Try adjusting your search.
            </p>
          </div>
        )}
      </div>
      {/* <CallToAction /> */}
    </main>
  );
}
