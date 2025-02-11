import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Upload, Loader2 } from "lucide-react";
import Cookies from "js-cookie";

import axios from "axios";
import { submitApplication } from "../../utils/api";

export default function ApplicationForm({ job, onSuccess }) {
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      toast.error("Please upload your resume");
      return;
    }

    const token = Cookies.get("token");
    if (!token) {
      toast.error("Please login to apply");
      navigate("/auth");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("resume", resume);
    // formData.append('message', message);
    // formData.append('jobId', job.id); // Include job ID or any other relevant data
    formData.append("company", job.company);
    formData.append("requirements", job.requirements);
    formData.append("jobPosition", job.title);
    formData.append("recruiterEmail",job.email);

    try {
      await submitApplication(formData, job);

      toast.success("Application submitted successfully!");
      onSuccess();

      toast.success("Application submitted successfully!");
      onSuccess();
      navigate("/candidate/dashboard");
    } catch (error) {
      console.error("Full error object:", error);
      console.error("Response data:", error.response?.data);
      console.error("Response status:", error.response?.status);

      const errorMessage =
        error.response?.data?.message || "Failed to submit application";
      // toast.error(errorMessage);
      console.error("Application submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      <div>
        <label className='block text-sm font-medium text-slate-300 mb-2'>
          Resume
        </label>
        <div className='flex items-center justify-center w-full'>
          <label className='flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-slate-600 bg-slate-700/50 hover:bg-slate-700 transition-colors'>
            <div className='flex flex-col items-center justify-center pt-5 pb-6'>
              <Upload className='w-8 h-8 mb-3 text-slate-400' />
              <p className='mb-2 text-sm text-slate-400'>
                <span className='font-semibold'>Click to upload</span> or drag
                and drop
              </p>
              <p className='text-xs text-slate-500'>
                PDF files only (MAX. 10MB)
              </p>
            </div>
            <input
              type='file'
              className='hidden'
              accept='.pdf,application/pdf'
              onChange={(e) => setResume(e.target.files[0])}
              required
            />
          </label>
        </div>
        {resume && (
          <p className='mt-2 text-sm text-slate-400'>
            Selected file: {resume.name}
          </p>
        )}
      </div>

      <div>
        <label className='block text-sm font-medium text-slate-300 mb-2'>
          Cover Letter
        </label>
        <textarea
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          rows={4}
          className='w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
          placeholder="Tell us why you're interested in this position..."
          required
        />
      </div>

      <div className='flex justify-end'>
        <button
          type='submit'
          disabled={isSubmitting}
          className='inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
        >
          {isSubmitting ? (
            <>
              <Loader2 className='w-4 h-4 mr-2 animate-spin' />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </form>
  );
}
