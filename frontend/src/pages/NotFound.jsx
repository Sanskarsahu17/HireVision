import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-[calc(100vh-64px)]'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-white mb-4'>404</h1>
        <p className='text-slate-400 mb-6'>Page not found</p>
        <Link
          to='/'
          className='text-purple-400 hover:text-purple-300 underline'
        >
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
