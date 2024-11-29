import React from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function JobCard({
  id,
  title,
  company,
  location,
  type,
  posted,
  description,
  featured = false,
}) {
  return (
    <div
      className={`p-6 rounded-xl ${
        featured
          ? "bg-slate-800/50 border border-purple-500/20"
          : "bg-slate-800/30"
      } hover:bg-slate-800/70 transition-colors group`}
    >
      {featured && (
        <span className='inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 mb-4'>
          Featured
        </span>
      )}
      <h3 className='text-xl font-semibold text-white mb-2'>{title}</h3>
      <p className='text-slate-400 mb-4'>{company}</p>

      <div className='flex flex-wrap gap-4 mb-4 text-sm text-slate-300'>
        <div className='flex items-center gap-1'>
          <MapPin className='w-4 h-4' />
          {location}
        </div>
        <div className='flex items-center gap-1'>
          <Clock className='w-4 h-4' />
          {posted}
        </div>
        <span className='px-2.5 py-1 rounded-full bg-slate-700 text-slate-300'>
          {type}
        </span>
      </div>

      <p className='text-slate-400 mb-6'>{description}</p>

      <Link
        to={`/job/${id}`}
        className='flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors'
      >
        View Details
        <ArrowRight className='w-4 h-4 transform group-hover:translate-x-1 transition-transform' />
      </Link>
    </div>
  );
}
