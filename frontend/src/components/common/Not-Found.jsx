import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
      <h1 className="text-5xl font-bold text-purple-500 mb-4">404</h1>
      <p className="text-slate-300 mb-6 text-xl">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="text-purple-400 underline text-lg">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;