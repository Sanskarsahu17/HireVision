// In Hero.jsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import image from "../../public/image.png"

export function Hero() {
  return (
    <div className='relative bg-black text-white pt-20 pb-12 overflow-hidden mx-auto'>
      {/* Neon animated background */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-32 left-1/2 w-[700px] h-[700px] bg-gradient-radial from-cyan-400/40 to-transparent rounded-full blur-3xl opacity-70 animate-pulse -translate-x-1/2' />
        <div className='absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-fuchsia-500/40 to-transparent rounded-full blur-2xl opacity-60 animate-pulse' />
      </div>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
          <motion.div
            className='lg:w-1/2 mb-10 lg:mb-0'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className='text-5xl font-extrabold leading-tight mb-6 drop-shadow-neon'>
  Revolutionizing Hiring with{" "}
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 animate-pulse">
    AI-Driven Precision
  </span>
</h1>
            <p className='text-xl text-cyan-200 mb-8 drop-shadow-neon'>
              Transform your recruitment process with our three-stage AI-powered platform: Resume Analysis, Job Matching, and Virtual Interviews.
            </p>
            <div className='flex gap-4'>
              <motion.button
                className='bg-cyan-500 shadow-neon px-8 py-3 rounded-lg font-semibold text-black hover:bg-cyan-400 transition-all flex items-center gap-2 neon-glow'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started <ArrowRight size={20} />
              </motion.button>
              <motion.button
                className='border-2 border-fuchsia-500 text-fuchsia-300 px-8 py-3 rounded-lg font-semibold hover:bg-fuchsia-500/20 transition-all neon-glow'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            className='lg:w-[40%] '
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src={image}
              alt='AI Recruitment'
              className='rounded-lg shadow-2xl border-4 border-cyan-400/30 neon-glow  '
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}