import React from "react";
import { ArrowRight } from "lucide-react";

export default function ApplicationsTable({ applications }) {
  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-xl font-semibold text-white'>
          Applied Applications
        </h3>
        <button className='text-purple-400 hover:text-purple-300 inline-flex items-center gap-1'>
          View all
          <ArrowRight className='w-4 h-4' />
        </button>
      </div>

      <div className='overflow-x-auto'>
        <table className='w-full'>
          <thead>
            <tr className='text-left text-slate-400 border-b border-slate-700'>
              <th className='pb-3'>Position</th>
              <th className='pb-3'>Company</th>
              <th className='pb-3'>Applied on</th>
              <th className='pb-3'>Status</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-slate-700'>
            {applications.map((application) => (
              <tr key={application.id} className='text-slate-300'>
                <td className='py-4'>{application.position}</td>
                <td className='py-4'>{application.company}</td>
                <td className='py-4'>{application.appliedOn}</td>
                <td className='py-4'>
                  <span
                    className={`px-2.5 py-1 rounded-full text-sm ${
                      application.status === "PENDING"
                        ? "bg-yellow-500/20 text-yellow-300"
                        : application.status === "SELECTED"
                        ? "bg-emerald-500/20 text-emerald-300"
                        : "bg-red-500/20 text-red-300"
                    }`}
                  >
                    {application.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
