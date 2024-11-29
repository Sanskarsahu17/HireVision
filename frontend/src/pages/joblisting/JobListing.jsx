import React from "react";
import { motion } from "framer-motion";
import { JobSearch } from "../../components/jobListing/JobSearch";
// import { JobFilters } from "../components/jobs/JobFilters";
import Listings from "../../components/jobListing/Listing";

export function Jobs() {
  return (
    <div className='min-h-screen bg-gray-900 pt-24 pb-12'>
      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-12'
        >
          <h1 className='text-4xl font-bold text-white mb-4'>
            Explore Opportunities at Nexus_AI
          </h1>
          <p className='text-xl text-gray-400'>
            Join us in revolutionizing hiring with AI
          </p>
        </motion.div>

        <div className='mb-8'>
          <JobSearch />
        </div>

        {/* <div className='grid grid-cols-1 lg:grid-cols-4 '> */}
        {/* <div className='lg:col-span-1'>
            <JobFilters />
          </div> */}
        <div className='lg:col-span-3 w-[80%] mx-auto'>
          <Listings />
        </div>

        <motion.div
          className='mt-12 bg-gray-800 rounded-lg p-8 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl font-bold text-white mb-4'>
            Don't see the right position?
          </h2>
          <p className='text-gray-400 mb-6'>
            Submit your resume and we'll notify you when relevant positions open
            up.
          </p>
          <button className='bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors'>
            Submit Your Resume
          </button>
        </motion.div>
      </div>
    </div>
  );
}
