import React from "react";
import { Briefcase } from "lucide-react";

export default function AuthHeader() {
  return (
    <div className='text-center mb-8'>
      <div className='inline-flex items-center justify-center w-12 h-12 bg-purple-500 rounded-xl mb-4'>
        <Briefcase className='w-6 h-6 text-white' />
      </div>
      <h1 className='text-2xl font-bold text-white mb-2'>
        Welcome to Nexus_AI
      </h1>
      <p className='text-slate-400'>Sign in to access your account</p>
    </div>
  );
}
