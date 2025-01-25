import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Brain,
  Code,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { toast } from "sonner";
// import { jobs } from "../../data/jobs";
import ApplicationModal from "../../components/jobDescription/ApplicationModal";
import { useJobs1 } from "../../hooks/useJobs1";

const iconMap = {
  Briefcase,
  Brain,
  Code,
};

export default function JobDescription() {
  const {jobs,loading,error} = useJobs1();
  console.log(jobs);
  const { _id } = useParams();
  console.log("ID: ",_id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const job = jobs.find((j) => j._id === _id);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log("Job finded: ",job)
  if (!job) {
    return (
      <div className='text-center py-16'>
        <h2 className='text-2xl font-bold text-white'>Job not found</h2>
        <Link
          to='/jobs'
          className='text-purple-400 hover:text-purple-300 mt-4 inline-block'
        >
          Back to jobs
        </Link>
      </div>
    );
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: job.title,
        text: `Check out this ${job.title} position at ${job.company}`,
        url: window.location.href,
      });
    } catch (error) {
      if (error.name !== "AbortError") {
        if (navigator.clipboard) {
          await navigator.clipboard.writeText(window.location.href);
          toast.success("Link copied to clipboard!");
        } else {
          toast.error(
            "Sharing and clipboard features are not supported on this browser."
          );
        }
      }
    }
  };

  return (
    <>
      <div className='max-w-4xl mx-auto px-4 py-12 bg-gray-900'>
        <div className='flex items-center justify-between mb-8'>
          <Link
            to='/jobs'
            className='inline-flex items-center text-purple-400 hover:text-purple-300 group'
          >
            <ArrowLeft className='w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform' />
            Back to all jobs
          </Link>
          <button
            onClick={handleShare}
            className='inline-flex items-center gap-2 px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors'
          >
            <Share2 className='w-4 h-4' />
            Share
          </button>
        </div>

        <div className='bg-slate-800/30 rounded-xl p-8 mb-8'>
          <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-6'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold text-white mb-2'>
                {job.title}
              </h1>
              <p className='text-slate-400'>
                {job.company} • {job.location}
              </p>
              <p className='text-slate-300 text-lg mb-6'>{job.description}</p>
              <div className='flex flex-wrap gap-4'>
                <span className='px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm'>
                  {job.type}
                </span>
                <span className='px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm'>
                  {/* {job.posted}  */}
                  
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className='mt-4 md:mt-0 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors'
            >
              Apply Now
              <ArrowRight className='w-4 h-4' />
            </button>
          </div>
        </div>

        <div className='space-y-12'>
          <section>
            <h2 className='text-2xl font-bold text-white mb-6'>
              Responsibilities
            </h2>
            <ul className='space-y-4'>
              {job.responsibilities.map((item, index) => (
                <li
                  key={index}
                  className='flex items-start gap-3 text-slate-300'
                >
                  <CheckCircle2 className='w-5 h-5 text-purple-400 flex-shrink-0 mt-1' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-6'>Requirements</h2>
            <ul className='space-y-4'>
              {job.requirements.map((item, index) => (
                <li
                  key={index}
                  className='flex items-start gap-3 text-slate-300'
                >
                  <CheckCircle2 className='w-5 h-5 text-purple-400 flex-shrink-0 mt-1' />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className='text-2xl font-bold text-white mb-6'>Benefits</h2>
            <div className='grid md:grid-cols-3 gap-6'>
              {job.benefits.map((benefit, index) => {
                
                return (
                  <div key={index} className='bg-slate-800/30 p-6 rounded-lg'>
                    
                    {/* <h3 className='text-lg font-semibold text-white mb-2'>
                      {benefit}
                    </h3> */}
                    <p className='text-slate-400'>{benefit}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className='bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-center'>
            <h2 className='text-2xl font-bold text-white mb-4'>
              Ready to Join Our Team?
            </h2>
            <p className='text-purple-100 mb-6'>
              Take the next step in your career and help shape the future of
              AI-driven recruitment.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className='bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-purple-50 transition-colors'
            >
              Apply Now
            </button>
          </section>
        </div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        job={job}
      />
    </>
  );
}
