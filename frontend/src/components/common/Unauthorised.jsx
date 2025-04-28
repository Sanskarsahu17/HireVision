// src/pages/Unauthorized.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900">
      <h1 className="text-4xl font-bold text-red-500 mb-4">401 - Unauthorized</h1>
      <p className="text-slate-300 mb-6">
        Sorry, you are not authorized to view this page.
      </p>
      <Link to="/auth" className="text-purple-400 underline">
        Go to Login
      </Link>
    </div>
  );
}