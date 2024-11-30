const ProfileHeader = () => {
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      alert("Profile picture updated successfully!");
    }
  };

  return (
    <div className='relative'>
      <a
        href='/dashboard'
        className='absolute left-0 top-0 text-purple-400 hover:text-purple-300 inline-flex items-center gap-2'
      >
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
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          />
        </svg>
        Back to Dashboard
      </a>

      <div className='text-center'>
        <div className='relative inline-block'>
          <img
            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
            alt='Profile'
            className='w-24 h-24 rounded-full'
          />
          <label className='absolute bottom-0 right-0 p-2 bg-purple-500 rounded-full cursor-pointer hover:bg-purple-600 transition-colors'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-4 h-4 text-white'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 18v-6m-6 6v-6m12 0v6M6 6l12-6m-6 6L6 6m6 0l12 6M6 6h12'
              />
            </svg>
            <input
              type='file'
              className='hidden'
              accept='image/*'
              onChange={handleImageUpload}
            />
          </label>
        </div>
        <h1 className='text-3xl font-bold text-white mt-4'>
          Welcome, James Kinn!
        </h1>
        <p className='text-slate-400'>Let's build your profile</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
