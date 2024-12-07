import React from "react";
import { Search, Filter } from "lucide-react";

export default function CandidateFilters({ onSearch }) {
  return (
    <div className='flex gap-4 mb-6'>
      <div className='flex-1 relative'>
        <Search className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
        <input
          type='text'
          placeholder='Search candidates...'
          onChange={(e) => onSearch(e.target.value)}
          className='w-full pl-10 pr-4 py-2 bg-slate-800/30 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
        />
      </div>
      <button className='inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors'>
        <Filter className='w-5 h-5' />
        Filters
      </button>
    </div>
  );
}
