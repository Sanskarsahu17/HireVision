import React from "react";

export default function CandidateList({ candidates }) {
  const statusMapping = {
    0: { label: "Under Review", bgColor: "bg-yellow-100" },
    1: { label: "Accepted", bgColor: "bg-green-100" },
    2: { label: "Interview Scheduled", bgColor: "bg-red-100" },
    3: { label: "Selected", bgColor: "bg-blue-100" },
    4: { label: "Rejected", bgColor: "bg-gray-300" },
  };

  const underReview = candidates.filter((c) => c.applicaitonStatus === 0);
  const reviewed = candidates.filter((c) => c.applicaitonStatus !== 0);

  const renderTable = (title, candidateList) => (
    <div className='mb-10'>
      <h2 className='text-xl font-bold text-white mb-4'>{title}</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 bg-white rounded-md overflow-hidden'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Email</th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Status</th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Uploaded</th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-gray-700'>Resume</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {candidateList.map((candidate) => {
              const statusInfo = statusMapping[candidate.applicaitonStatus] || {};
              return (
                <tr key={candidate._id} className={statusInfo.bgColor}>
                  <td className='px-6 py-4 text-sm text-gray-800'>{candidate.email}</td>
                  <td className='px-6 py-4 text-sm font-medium text-gray-900'>
                    {statusInfo.label || "Unknown"}
                  </td>
                  <td className='px-6 py-4 text-sm text-gray-800'>
                    {new Date(candidate.uploadedAt).toLocaleDateString()}
                  </td>
                  <td className='px-6 py-4 text-sm'>
                    <a
                      href={candidate.resumePath}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-blue-600 hover:underline'
                    >
                      View Resume
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {candidateList.length === 0 && (
          <p className="text-sm text-gray-400 mt-2">No candidates in this category.</p>
        )}
      </div>
    </div>
  );

  return (
    <div className='mt-6'>
      {renderTable("Under Review Candidates", underReview)}
      {renderTable("Reviewed Candidates", reviewed)}
    </div>
  );
}
