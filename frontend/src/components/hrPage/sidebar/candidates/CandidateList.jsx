import React from "react";
import { motion } from "framer-motion";



export default function CandidateList({ candidates }) {
  const statusMapping = {
    0: { label: "Under-Review", bgColor: "bg-yellow-500" },
    1: { label: "Accepted", bgColor: "bg-green-500" },
    2: { label: "Interview-scheduled", bgColor: "bg-red-500" },
    3: { label: "Selected", bgColor: "bg-blue-500" },
    4: {label: "Rejected", bgColor: "bg-blue-500"},
  };
  console.log("Candidates checking: ",candidates);
  return (
    <div className='mt-4'>
      {candidates.map((candidate) => (
        <motion.div
          key={candidate._id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className='bg-slate-800 p-6 rounded-lg shadow-md mb-4'
        >
          <h2 className='text-xl font-semibold text-white'>
            {candidate.company}
          </h2>
          <p className='text-slate-400'>Email: {candidate.email}</p>
          <p className='text-slate-400'>
            Recruiter: {candidate.recruiterEmail}
          </p>
          <div className='text-slate-400 flex  items-center '>
            Status:
            <span className={`ml-2 px-2 py-1 rounded `}>
              {/* {<p>{statusMapping[candidate.applicationStatus].label} </p>} */}
              {<p>{statusMapping[candidate.applicationStatus].label}</p>}
            </span>
          </div>{" "}
          <p className='text-slate-400'>
            Uploaded: {new Date(candidate.uploadedAt).toLocaleDateString()}
          </p>
          <div className=' flex flex-col  gap-4'>
            <a
              href={candidate.resumePath}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:underline'
            >
              View Resume
            </a>
            {/* <Sbutton text=' Check for Eligibility' /> */}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
