import React from "react";
import { Search, MapPin, Filter } from "lucide-react";
import { motion } from "framer-motion";

export function JobSearch() {
  return (
    <motion.div
      className='bg-gray-800 p-6 rounded-lg'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className='grid md:grid-cols-3 gap-4'>
        <div className='relative'>
          <Search className='absolute left-3 top-3 text-gray-400 w-5 h-5' />
          <input
            type='text'
            placeholder='Search jobs...'
            className='w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none'
          />
        </div>
        <div className='relative'>
          <MapPin className='absolute left-3 top-3 text-gray-400 w-5 h-5' />
          <input
            type='text'
            placeholder='Location...'
            className='w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none'
          />
        </div>
        <button className='flex items-center justify-center gap-2 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors'>
          <Filter className='w-5 h-5' />
          Filter Results
        </button>
      </div>
    </motion.div>
  );
}
