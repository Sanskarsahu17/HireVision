import React from "react";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";
import JobForm from "./JobForm";

function JobModal({ isOpen, onClose, initialData = null }) {
  if (!isOpen) return null;

  const handleSubmit = (formData) => {
    // Transform text areas into arrays
    const processedData = {
      ...formData,
      requirements: formData.requirements.split("\n").filter(Boolean),
      responsibilities: formData.responsibilities.split("\n").filter(Boolean),
      benefits: formData.benefits.split("\n").filter(Boolean),
    };

    console.log("Processed job data:", processedData);
    toast.success(
      initialData ? "Job updated successfully!" : "Job created successfully!"
    );
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-slate-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-white'>
            {initialData ? "Edit Job" : "Create New Job"}
          </h2>
          <button
            onClick={onClose}
            className='text-slate-400 hover:text-white transition-colors'
          >
            <X className='w-6 h-6' />
          </button>
        </div>

        <JobForm
          onSubmit={handleSubmit}
          initialData={initialData}
          isEdit={!initialData}
        />
      </div>
    </div>
  );
}

export default JobModal;
