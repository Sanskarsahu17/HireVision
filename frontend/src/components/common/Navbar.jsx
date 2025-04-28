import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  BrainCircuit,
  LayoutDashboard,
  Briefcase,
  UserCircle,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

function NavItem({
  to,
  icon: Icon,
  label,
  onClick,
  isButton = false,
  className = "",
}) {
  const Tag = isButton ? "button" : Link;
  return (
    <Tag
      to={to}
      onClick={onClick}
      className={`flex items-center gap-2 text-slate-300 hover:text-white transition-colors ${
        isButton ? "px-4 py-2 text-sm" : ""
      } ${className}`}
    >
      {Icon && <Icon className='w-4 h-4' />}
      {label}
    </Tag>
  );
}

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated, userRole, logout } = useAuth();

  const handleLogout = () => {
    logout();
    const currentPath = location.pathname;
    navigate(currentPath === "/" || currentPath === "/job/:id" ? "/auth" : "/");
  };

  return (
    <motion.nav
      className='navbar sticky top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800'
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
            <span className='text-xl font-bold text-white'>HireVision</span>
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex items-center gap-8'>
            {isAuthenticated ? (
              <>
                <NavItem
                  to={`/${userRole}/dashboard`}
                  icon={LayoutDashboard}
                  label='Dashboard'
                />
                <NavItem to='candidate/profile' icon={UserCircle} label='Profile' />
                <NavItem to='/jobs' icon={Briefcase} label='Jobs' />
                <NavItem
                  
                  isButton
                  onClick={handleLogout}
                  icon={LogOut}
                  label='Logout'
                  className='bg-red-600 text-white rounded-lg hover:bg-red-700'
                />
              </>
            ) : (
              <>
                <NavItem to='/jobs' icon={Briefcase} label='Jobs' />
                <NavItem
                  to='/auth?type=login'
                  label='Login'
                  className='px-4 py-2'
                />
                <NavItem
                  to='/auth?type=signup'
                  label='Sign Up'
                  className='px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700'
                />
              </>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
