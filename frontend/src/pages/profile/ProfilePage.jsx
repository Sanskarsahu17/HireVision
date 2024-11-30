import React from "react";
import { Toaster } from "sonner";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import PersonalInfo from "../../components/profile/sections/PersonalInfo";
import Experience from "../../components/profile/sections/Experience";
import Skills from "../../components/profile/sections/Skills";
import Education from "../../components/profile/sections/Education";
import ResumeUpload from "../../components/profile/sections/ResumeUpload";
import ProfileProgress from "../../components/profile/sections/ProfileProgress";

export default function ProfilePage() {
  return (
    <div className='min-h-screen bg-slate-900'>
      <Toaster position='top-right' />
      <div className=' p-8'>
        <ProfileHeader />

        {/* <div className='grid grid-cols-[240px,1fr] gap-8 mt-8'>
          <ProfileSidebar /> */}

        <div className='space-y-6'>
          <PersonalInfo />
          <Experience />
          <Skills />
          <Education />
          <ResumeUpload />
          <ProfileProgress />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
