import React from "react";
import { X } from "lucide-react";
import JobForm from "./JobForm";

function JobModal({ onClose, onSave, job }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-slate-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-white'>
            {job ? "Edit Job" : "Create New Job"}
          </h2>
          <button
            onClick={onClose}
            className='text-slate-400 hover:text-white transition-colors'
          >
            <X className='w-6 h-6' />
          </button>
        </div>

        <JobForm onSubmit={onSave} initialData={job} />
      </div>
    </div>
  );
}

export default JobModal;
