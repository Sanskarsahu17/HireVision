import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/hrPage/SideBar";
import CandidateCard from "../../components/hrPage/sidebar/candidates/CandidateCard";
import CandidateFilter from "../../components/hrPage/sidebar/candidates/CandidateFilter";
import { candidates } from "../../data/candidates";

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className='min-h-screen bg-slate-900'>
      <Sidebar />
      <div className='ml-64 p-8'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-8'
          >
            <h1 className='text-3xl font-bold text-white'>Candidates</h1>
            <p className='text-slate-400'>
              Manage and track candidate applications
            </p>
          </motion.div>

          <CandidateFilter onSearch={setSearchTerm} />

          <div className='space-y-6'>
            {filteredCandidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CandidateCard candidate={candidate} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
