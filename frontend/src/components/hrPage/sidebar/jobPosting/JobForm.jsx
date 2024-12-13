import React from "react";

const JOB_TYPES = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
];

const FormField = ({ label, required, children }) => (
  <div>
    <label className='block text-sm font-medium text-slate-300 mb-1'>
      {label}
      {required && "*"}
    </label>
    {children}
  </div>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={`w-full bg-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
    {...props}
  />
);

const TextArea = ({ ...props }) => (
  <textarea
    className='w-full bg-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
    {...props}
  />
);

const Select = ({ children, ...props }) => (
  <select
    className='w-full bg-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
    {...props}
  >
    {children}
  </select>
);

const JobForm = ({ onSubmit, initialData = {}, isEdit = false }) => {
  const formatArrayToText = (arr) => {
    return Array.isArray(arr) ? arr.join("\n") : arr || "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data)
    // Transform text areas into arrays
    const processedData = {
      ...data,
      requirements: data.requirements.split("\n").filter(Boolean),
      responsibilities: data.responsibilities.split("\n").filter(Boolean),
      benefits: data.benefits.split("\n").filter(Boolean),
    };

    onSubmit(processedData);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <FormField label='Job Title' required>
        <Input
          type='text'
          name='title'
          defaultValue={isEdit && initialData?.title ? initialData.title : ""}
          required
          placeholder='e.g., Senior Frontend Developer'
        />
      </FormField>

      <div className='grid grid-cols-2 gap-4'>
        <FormField label='Department' required>
          <Input
            type='text'
            name='department'
            defaultValue={
              isEdit && initialData?.department ? initialData.department : ""
            }
            required
            placeholder='e.g., Engineering'
          />
        </FormField>

        <FormField label='Location' required>
          <Input
            type='text'
            name='location'
            defaultValue={
              isEdit && initialData?.location ? initialData.location : ""
            }
            required
            placeholder='e.g., Remote, New York, NY'
          />
        </FormField>
      </div>

      <FormField label='Job Type' required>
        <Select
          name='type'
          defaultValue={
            isEdit && initialData?.type ? initialData.type : "full-time"
          }
          required
        >
          {JOB_TYPES.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label='Salary Range'>
        <div className='grid grid-cols-2 gap-4'>
          <Input
            type='text'
            name='salaryMin'
            defaultValue={
              isEdit && initialData?.salaryMin ? initialData.salaryMin : ""
            }
            placeholder='Min salary'
          />
          <Input
            type='text'
            name='salaryMax'
            defaultValue={
              isEdit && initialData?.salaryMax ? initialData.salaryMax : ""
            }
            placeholder='Max salary'
          />
        </div>
      </FormField>

      <FormField label='Description' required>
        <TextArea
          name='description'
          defaultValue={
            isEdit && initialData?.description ? initialData.description : ""
          }
          required
          rows={4}
          placeholder='Provide a detailed job description'
        />
      </FormField>

      <FormField label='Requirements' required>
        <TextArea
          name='requirements'
          defaultValue={
            isEdit && initialData?.requirements
              ? formatArrayToText(initialData.requirements)
              : ""
          }
          required
          rows={4}
          placeholder='List each requirement on a new line'
        />
      </FormField>

      <FormField label='Responsibilities' required>
        <TextArea
          name='responsibilities'
          defaultValue={
            isEdit && initialData?.responsibilities
              ? formatArrayToText(initialData.responsibilities)
              : ""
          }
          required
          rows={4}
          placeholder='List each responsibility on a new line'
        />
      </FormField>

      <FormField label='Benefits'>
        <TextArea
          name='benefits'
          defaultValue={
            isEdit && initialData?.benefits
              ? formatArrayToText(initialData.benefits)
              : ""
          }
          rows={3}
          placeholder='List each benefit on a new line'
        />
      </FormField>

      <div className='flex justify-end gap-4 mt-6'>
        <button
          type='button'
          onClick={() => onSubmit(null)}
          className='px-4 py-2 text-slate-300 hover:text-white transition-colors'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors'
        >
          {initialData?.id ? "Update Job" : "Create Job"}
        </button>
      </div>
    </form>
  );
};

export default JobForm;
