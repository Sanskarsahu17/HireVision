import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className='bg-gray-900 text-white pt-32 pb-20'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <motion.div
            className='lg:w-1/2 mb-10 lg:mb-0'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-5xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600'>
              Revolutionizing Hiring with AI-Driven Precision
            </h1>
            <p className='text-xl text-gray-400 mb-8'>
              Transform your recruitment process with our three-stage AI-powered
              platform: Resume Analysis, Job Matching, and Virtual Interviews.
            </p>
            <div className='flex gap-4'>
              <motion.button
                className='bg-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className='border-2 border-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600/10 transition-colors'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className='lg:w-1/2'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src='https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070'
              alt='AI Recruitment'
              className='rounded-lg shadow-2xl'
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
