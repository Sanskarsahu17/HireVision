import React from "react";
import { Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

export default function SignUpForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Account created successfully!");
    navigate("/profile");
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <InputField
        icon={User}
        type='text'
        placeholder='Enter your full name'
        required
      />

      <InputField
        icon={Mail}
        type='email'
        placeholder='Enter your email'
        required
      />

      <InputField
        icon={Lock}
        type='password'
        placeholder='Create a password'
        required
      />

      <div className='space-y-2'>
        <label className='text-sm font-medium text-slate-400'>I am a:</label>
        <div className='grid grid-cols-2 gap-4'>
          <label className='flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors'>
            <input
              type='radio'
              name='userType'
              value='candidate'
              className='w-4 h-4 text-purple-500'
              required
            />
            <span className='text-white'>Candidate</span>
          </label>
          <label className='flex items-center gap-2 p-3 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors'>
            <input
              type='radio'
              name='userType'
              value='recruiter'
              className='w-4 h-4 text-purple-500'
            />
            <span className='text-white'>Recruiter</span>
          </label>
        </div>
      </div>

      <button
        type='submit'
        className='w-full bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors'
      >
        Create Account
      </button>
    </form>
  );
}
