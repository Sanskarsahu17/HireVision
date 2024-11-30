const ResumeUpload = () => {
  const handleResumeUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      alert("Resume uploaded successfully!");
    }
  };

  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <h2 className='text-xl font-semibold text-white mb-6'>Resume</h2>

      <div className='border-2 border-dashed border-slate-700 rounded-lg p-8 text-center'>
        <div className='p-3 bg-purple-500/20 rounded-lg w-fit mx-auto mb-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 text-purple-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4 5.5h16M4 10h16m-10 4.5h10m-5 4H4m0-15h5.5m-5.5 15h5.5'
            />
          </svg>
        </div>

        <h3 className='text-lg font-medium text-white mb-2'>
          Upload Your Resume
        </h3>
        <p className='text-slate-400 mb-4'>Supported formats: PDF, DOC, DOCX</p>

        <label className='inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg cursor-pointer hover:bg-purple-600 transition-colors'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-4 h-4'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8 7v10m8-10v10M16 5H8m0 14h8m-8-4v4m8-4v4'
            />
          </svg>
          Choose File
          <input
            type='file'
            className='hidden'
            accept='.pdf,.doc,.docx'
            onChange={handleResumeUpload}
          />
        </label>

        <div className='mt-6 flex items-center justify-center gap-4 text-sm'>
          <button className='text-purple-400 hover:text-purple-300 inline-flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.172 7l-6.586 6.586M7 17.414l6.586-6.586M3.5 16.5v-9a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H5a1.5 1.5 0 01-1.5-1.5z'
              />
            </svg>
            Preview
          </button>
          <button className='text-red-400 hover:text-red-300 inline-flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 13l6-6m0 0l-6 6m6-6v12M3 9l1.42 1.418M5 11v7.997m2.998-.002V10m4.004 8V10m5 7.997V11m2.996 6.004V10'
              />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeUpload;
