import React, { useState } from "react";
import { Mail, Lock, User, Briefcase } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import axios from "axios";

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "", // Added for user type (Candidate/Recruiter)
    companyName: "", // Added for company name
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.userType === "recruiter" && !formData.companyName) {
        toast.error("Please enter your company name.");
        return;
      }

      await axios.post(
        "http://localhost:5000/api/authentication/register",
        formData
      );
      console.log(formData);
      // toast.success("Account created successfully!");
      navigate("/auth");
    } catch (error) {
      console.error("Registration failed", error);
      toast.error("Failed to create account. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <InputField
        name='name'
        value={formData.name}
        onChange={handleChange}
        icon={User}
        type='text'
        placeholder='Enter your full name'
        required
      />

      <InputField
        name='email'
        value={formData.email}
        onChange={handleChange}
        icon={Mail}
        type='email'
        placeholder='Enter your email'
        required
      />

      <InputField
        name='password'
        value={formData.password}
        onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
            <span className='text-white'>Recruiter</span>
          </label>
        </div>
      </div>

      {/* Conditionally render the company name input field */}
      {formData.userType === "recruiter" && (
        <InputField
          name='companyName'
          value={formData.companyName}
          onChange={handleChange}
          icon={Briefcase}
          type='text'
          placeholder='Enter your company name'
          required={formData.userType === "recruiter"}
        />
      )}

      <button
        type='submit'
        className='w-full bg-purple-500 text-white py-2 rounded-lg font-medium hover:bg-purple-600 transition-colors'
      >
        Create Account
      </button>
    </form>
  );
}
