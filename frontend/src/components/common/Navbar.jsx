import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Changed this import
import {
  BrainCircuit,
  LayoutDashboard,
  Briefcase,
  UserCircle,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, userRole, logout } = useAuth();

  const handleLogout = () => {
    logout();

    // Get the current location
    const currentPath = location.pathname;

    // If the user is on the home page or job listing page, stay on the same page
    if (currentPath === "/" || currentPath === "/jobs") {
      navigate("/auth");
    } else {
      navigate("/");
    }
  };

  return (
    <motion.nav
      className='sticky top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800'
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
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate(`/${userRole}/dashboard`)}
                  className='text-slate-300 hover:text-white flex items-center gap-2'
                >
                  <LayoutDashboard className='w-4 h-4' />
                  Dashboard
                </button>

                <button
                  onClick={() => navigate("/profile")}
                  className='text-slate-300 hover:text-white flex items-center gap-2'
                >
                  <UserCircle className='w-4 h-4' />
                  Profile
                </button>

                <button
                  onClick={() => navigate("/jobs")}
                  className='text-slate-300 hover:text-white flex items-center gap-2'
                >
                  <Briefcase className='w-4 h-4' />
                  Jobs
                </button>

                <button
                  onClick={handleLogout}
                  className='px-4 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors'
                >
                  <LogOut className='w-4 h-4 mr-1 inline-block' />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/jobs")}
                  className='text-slate-300 hover:text-white flex items-center gap-2'
                >
                  <Briefcase className='w-4 h-4' />
                  Jobs
                </button>

                <button
                  onClick={() => navigate("/auth?type=login")}
                  className='px-4 py-2 text-sm text-slate-300 hover:text-white'
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/auth?type=signup")}
                  className='px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
