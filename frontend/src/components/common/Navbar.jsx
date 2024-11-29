import React, { useState } from "react";
import {
  BrainCircuit,
  LayoutDashboard,
  Briefcase,
  UserCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Adjust the duration as needed
    setTimeoutId(id);
  };

  return (
    <motion.nav
      className='fixed w-full z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center gap-2'>
            <BrainCircuit className='w-8 h-8 text-purple-500' />
            <span className='text-xl font-bold text-white'>HireVision</span>
          </div>

          <div className='hidden md:flex items-center gap-8'>
            <div
              className='relative group'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href='#'
                className='text-gray-300 hover:text-white flex items-center gap-2'
              >
                <LayoutDashboard className='w-4 h-4' />
                Dashboard
              </a>
              {dropdownOpen && (
                <div className='absolute left-0 bg-gray-800 text-white rounded-md shadow-lg mt-2'>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-700'>
                    HR Dashboard
                  </a>
                  <a href='#' className='block px-4 py-2 hover:bg-gray-700'>
                    Candidate Dashboard
                  </a>
                </div>
              )}
            </div>
            <a
              href='#'
              className='text-gray-300 hover:text-white flex items-center gap-2'
            >
              <Briefcase className='w-4 h-4' />
              Job Listings
            </a>
            <a
              href='#'
              className='text-gray-300 hover:text-white flex items-center gap-2'
            >
              <UserCircle className='w-4 h-4' />
              Profile
            </a>
          </div>

          <div className='flex items-center gap-4'>
            <button className='px-4 py-2 text-sm text-gray-300 hover:text-white'>
              Login
            </button>
            <button className='px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
