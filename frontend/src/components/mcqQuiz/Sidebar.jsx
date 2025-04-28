import React from 'react'

function Sidebar({questions,currentQ,handleJumpTo}) {
  return (
    <div >
      <div className='w-100 bg-white rounded-2xl shadow-lg p-4 mr-4'>
        <h2 className="text-lg font-bold text-black mb-4">Questions</h2>
        <div className='grid grid-cols-2 gap-2'>
            {questions.map((_,index)=>(
                <button
                key={index}
                onClick={()=>handleJumpTo(index)}
                className={`px-4 py-2 rounded-full font-semibold text-sm 
                text-black
                ${currentQ === index ? "bg-purple-600 text-white" : "bg-black-200 text-gray-800"}` 
                }
                >
                    Q{index + 1}
                </button>
            ))}
        </div>
        <div className="mt-6 text-center">
        <p className="text-lg font-bold text-red-600">Time Left: s</p>
      </div>
      </div>
    </div>
  )
}

export default Sidebar

