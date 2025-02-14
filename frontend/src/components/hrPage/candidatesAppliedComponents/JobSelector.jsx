import React from "react";

export default function JobSelector({ jobOptions, selectedJob, setSelectedJob }) {
  return (
    <div className="mb-6">
      <label className="text-white font-semibold block mb-2">Select Job Position:</label>
      <select
        className="w-full p-2 rounded bg-slate-800 text-white border border-slate-600"
        value={selectedJob || ""}
        onChange={(e) => setSelectedJob(e.target.value)}
      >
        <option value="" disabled>Select a Job Position</option>
        {jobOptions.map((job, index) => (
          <option key={index} value={job}>{job}</option>
        ))}
      </select>
    </div>
  );
}
