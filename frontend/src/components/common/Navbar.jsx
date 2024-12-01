import React from "react";
import {
  BrainCircuit,
  LayoutDashboard,
  Briefcase,
  UserCircle,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  isAuthenticated = true,
  userRole = "candidate",
  handleLogout = () => {},
}) {
  const navigate = useNavigate();

  return (
    <motion.nav
      className='fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800'
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='container mx-auto px-6'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => navigate("/")}
          >
            <BrainCircuit className='w-8 h-8 text-purple-500' />
            <span className='text-xl font-bold text-white'>Nexus_AI</span>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center gap-8'>
            {isAuthenticated && (
              <button
                onClick={() => navigate(`/${userRole}/dashboard`)}
                className='text-slate-300 hover:text-white flex items-center gap-2'
              >
                <LayoutDashboard className='w-4 h-4' />
                {userRole === "hr" ? "HR Dashboard" : "Candidate Dashboard"}
              </button>
            )}

            <button
              onClick={() => navigate("/jobs")}
              className='text-slate-300 hover:text-white flex items-center gap-2'
            >
              <Briefcase className='w-4 h-4' />
              Job Listings
            </button>

            {isAuthenticated && (
              <button
                onClick={() => navigate("/profile")}
                className='text-slate-300 hover:text-white flex items-center gap-2'
              >
                <UserCircle className='w-4 h-4' />
                Profile
              </button>
            )}
          </div>

          {/* Authentication Buttons */}
          <div className='flex items-center gap-4'>
            {!isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate("/auth")}
                  className='px-4 py-2 text-sm text-slate-300 hover:text-white'
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/auth")}
                  className='px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className='px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
              >
                <LogOut className='w-4 h-4 mr-1 inline-block' />
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
