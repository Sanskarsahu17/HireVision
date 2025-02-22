import React from "react";
import { checkEligibility } from "../../../../services/HRService";

export const CheckButton = (candidate) => {
    // Creating a data object which stores actual data to be stored to the llm
    const data = {};
    // 
    const candidates= candidate.candidatesData;
    console.log(candidates);
    if(candidates.length>0){
        
        data.jobPosition = candidates[0].jobPosition;
        data.requirements = candidates[0].requirements;
        const resumes = [];
        candidates.forEach(element => {
            if(element.applicaitonStatus === 0){
            const candidate = {};
            candidate.resume = element.resumePath;
            candidate.candidate_ID = element._id;
            resumes.push(candidate);
            }
        });
        data.resumes = resumes;
    }
    console.log("Data11: ",data);

    const onClicked = ()=>{
        const response = checkEligibility(data);
        console.log("response: ", response);
    }
//    onClicked();   // add this fucntion to onclicked on the button;
  return (
    <div className='relative group'>
      <button onClick={onClicked} className='relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95'>
        <span className='absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100'></span>

        <span className='relative z-10 block px-6 py-3 rounded-xl bg-gray-950'>
          <div className='relative z-10 flex items-center space-x-2'>
            <span className='transition-all duration-500 group-hover:translate-x-1'>
              Check Eligibility
            </span>
            <svg
              className='w-6 h-6 transition-transform duration-500 group-hover:translate-x-1'
              data-slot='icon'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                clipRule='evenodd'
                d='M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z'
                fillRule='evenodd'
              ></path>
            </svg>
          </div>
        </span>
      </button>
    </div>
  );
};

export default CheckButton;