import React from "react";

const JOB_TYPES = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
];

const Input = ({ label, required, ...props }) => (
  <div className='mb-4'>
    <label className='block text-sm font-medium text-slate-300 mb-1'>
      {label} {required && "*"}
    </label>
    <input
      className='w-full bg-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
      {...props}
    />
  </div>
);

const TextArea = ({ label, required, ...props }) => (
  <div className='mb-4'>
    <label className='block text-sm font-medium text-slate-300 mb-1'>
      {label} {required && "*"}
    </label>
    <textarea
      className='w-full bg-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
      rows={4}
      {...props}
    />
  </div>
);

const Select = ({ label, required, options, ...props }) => (
  <div className='mb-4'>
    <label className='block text-sm font-medium text-slate-300 mb-1'>
      {label} {required && "*"}
    </label>
    <select
      className='w-full bg-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
      {...props}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

const JobForm = ({ onSubmit, initialData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    ["requirements", "responsibilities", "benefits"].forEach((field) => {
      data[field] = data[field].split("\n").filter(Boolean);
    });

    onSubmit(data);
  };

  const getValue = (field) =>
    initialData?.[field]
      ? Array.isArray(initialData[field])
        ? initialData[field].join("\n")
        : initialData[field]
      : "";

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <Input
        label='Job Title'
        name='title'
        required
        defaultValue={getValue("title")}
        placeholder='e.g., Senior Frontend Developer'
      />

      <div className='grid grid-cols-2 gap-4'>
        <Input
          label='Department'
          name='department'
          required
          defaultValue={getValue("department")}
          placeholder='e.g., Engineering'
        />
        <Input
          label='Location'
          name='location'
          required
          defaultValue={getValue("location")}
          placeholder='e.g., Remote, New York, NY'
        />
      </div>

      <Select
        label='Job Type'
        name='type'
        required
        options={JOB_TYPES}
        defaultValue={getValue("type") || "full-time"}
      />

      <div className='grid grid-cols-2 gap-4'>
        <Input
          label='Minimum Salary'
          name='salaryMin'
          type='text'
          defaultValue={getValue("salaryMin")}
          placeholder='e.g., 50000'
        />
        <Input
          label='Maximum Salary'
          name='salaryMax'
          type='text'
          defaultValue={getValue("salaryMax")}
          placeholder='e.g., 80000'
        />
      </div>

      <TextArea
        label='Description'
        name='description'
        required
        defaultValue={getValue("description")}
        placeholder='Provide a detailed job description'
      />

      <TextArea
        label='Requirements'
        name='requirements'
        required
        defaultValue={getValue("requirements")}
        placeholder='List each requirement on a new line'
      />

      <TextArea
        label='Responsibilities'
        name='responsibilities'
        required
        defaultValue={getValue("responsibilities")}
        placeholder='List each responsibility on a new line'
      />

      <TextArea
        label='Benefits'
        name='benefits'
        defaultValue={getValue("benefits")}
        placeholder='List each benefit on a new line'
      />

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
          {initialData ? "Update Job" : "Create Job"}
        </button>
      </div>
    </form>
  );
};

export default JobForm;
