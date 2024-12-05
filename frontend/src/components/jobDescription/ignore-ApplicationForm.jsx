import React, { useState } from "react";
import { toast } from "sonner";
import { Upload, Loader2 } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { submitApplication } from "../../utils/api";

export default function ApplicationForm({ job, onSuccess }) {
  const { isAuthenticated } = useAuth();
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      toast.error("Please login to apply for this position");
      return;
    }

    if (!resume) {
      toast.error("Please upload your resume");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("resume", resume);
      formData.append("coverLetter", coverLetter);
      formData.append("jobId", job.id);
      formData.append("jobTitle", job.title);

      await submitApplication(formData);

      toast.success("Application submitted successfully!");
      onSuccess();
    } catch (error) {
      toast.error(error.message || "Failed to submit application");
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
                PDF, DOC, or DOCX (MAX. 10MB)
              </p>
            </div>
            <input
              type='file'
              className='hidden'
              accept='.pdf,.doc,.docx'
              onChange={(e) => setResume(e.target.files[0])}
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
