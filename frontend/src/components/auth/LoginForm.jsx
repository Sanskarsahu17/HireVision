import React from "react";
import { Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

export default function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Login successful!");
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <InputField
        icon={Mail}
        type='email'
        placeholder='Enter your email'
        required
      />

      <InputField
        icon={Lock}
        type='password'
        placeholder='Enter your password'
        required
      />

      <div className='flex justify-end'>
        <button className='text-sm text-purple-400 hover:text-purple-300'>
          Forgot Password?
        </button>
      </div>

      <button
        type='submit'
        className='w-full bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors'
      >
        Login
      </button>

      <div className='relative my-6'>
        <div className='absolute inset-0 flex items-center'>
          <div className='w-full border-t border-slate-700'></div>
        </div>
        <div className='relative flex justify-center text-sm'>
          <span className='px-2 bg-slate-800/30 text-slate-400'>
            Or continue with
          </span>
        </div>
      </div>

      <button
        type='button'
        className='w-full bg-slate-700/50 text-white py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors flex items-center justify-center gap-2'
      >
        <img
          src='https://www.google.com/favicon.ico'
          alt='Google'
          className='w-4 h-4'
        />
        Sign in with Google
      </button>
    </form>
  );
}
