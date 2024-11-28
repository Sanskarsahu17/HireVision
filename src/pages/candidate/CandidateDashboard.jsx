import React from "react";
import ProfileCard from "../../components/candidatePage/ProfileCard";
import ApplicationStatus from "../../components/candidatePage/ApplicationStatus";
import ApplicationsTable from "../../components/candidatePage/ApplicationsTable";
import Reminders from "../../components/candidatePage/Reminders";

const mockCandidate = {
  id: "1",
  name: "James Kinn",
  role: "Middle UX/UI Designer",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  applications: [
    {
      id: "1",
      position: "Basics of Mobile UX",
      company: "Bruno Scott",
      appliedOn: "Feb 12",
      status: "PENDING",
    },
    {
      id: "2",
      position: "Digital Design System",
      company: "Bruno Scott",
      appliedOn: "Feb 14",
      status: "PENDING",
    },
    {
      id: "3",
      position: "Basics of Mobile UX",
      company: "Bruno Scott",
      appliedOn: "Feb 16",
      status: "PENDING",
    },
  ],
  currentStage: "TEST_IN_PROGRESS",
  testProgress: 34,
};

const mockReminders = [
  {
    id: "1",
    message: "You have been selected for the next round",
    type: "success",
  },
];

export default function CandidateDashboard() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-8'>
      <div className='grid gap-8 md:grid-cols-[300px,1fr]'>
        <div>
          <ProfileCard candidate={mockCandidate} />
        </div>

        <div className='space-y-8'>
          <h1 className='text-3xl font-bold text-white'>Dashboard</h1>
          <p className='text-slate-400'>Welcome back</p>

          <ApplicationStatus
            currentStage={mockCandidate.currentStage}
            testProgress={mockCandidate.testProgress}
          />

          <ApplicationsTable applications={mockCandidate.applications} />
        </div>

        <div className='md:col-start-2'>
          <Reminders reminders={mockReminders} />
        </div>
      </div>
    </div>
  );
}
