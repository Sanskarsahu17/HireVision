import React from "react";

function InputField({ icon: Icon, type, placeholder, required }) {
  return (
    <div className='relative'>
      <Icon className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
      <input
        type={type}
        className='w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default InputField;
