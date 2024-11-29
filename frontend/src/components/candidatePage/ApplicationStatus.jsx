import React from "react";
import { CheckCircle2, Clock, ArrowRight } from "lucide-react";

export default function ApplicationStatus({ currentStage, testProgress }) {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      <div className='bg-purple-500/10 rounded-xl p-6'>
        <h3 className='text-xl font-semibold text-white mb-3'>
          Application Status
        </h3>
        <div className='flex items-center gap-2 text-purple-300'>
          <CheckCircle2 className='w-5 h-5' />
          {currentStage === "RESUME_SUBMITTED" && "Resume has been submitted"}
          {currentStage === "TEST_PENDING" && "Selected for online assessment"}
          {currentStage === "TEST_IN_PROGRESS" && "Test in progress"}
          {currentStage === "HR_INTERVIEW" && "Selected for HR Interview"}
        </div>
      </div>

      {currentStage === "TEST_PENDING" && (
        <div className='bg-emerald-500/10 rounded-xl p-6'>
          <h3 className='text-xl font-semibold text-white mb-3'>
            Take Assessment
          </h3>
          <button className='inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-medium'>
            Start Test Now
            <ArrowRight className='w-4 h-4' />
          </button>
        </div>
      )}

      {currentStage === "TEST_IN_PROGRESS" && testProgress !== undefined && (
        <div className='bg-emerald-500/10 rounded-xl p-6'>
          <h3 className='text-xl font-semibold text-white mb-3'>
            Assessment Progress
          </h3>
          <div className='flex items-center gap-3'>
            <Clock className='w-5 h-5 text-emerald-400' />
            <div className='flex-1'>
              <div className='h-2 bg-slate-700 rounded-full overflow-hidden'>
                <div
                  className='h-full bg-emerald-400 transition-all duration-500'
                  style={{ width: `${testProgress}%` }}
                />
              </div>
            </div>
            <span className='text-emerald-400'>{testProgress}%</span>
          </div>
        </div>
      )}
    </div>
  );
}
