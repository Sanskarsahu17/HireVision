import React from "react";
import { User, Bell, Shield, Mail } from "lucide-react";
import Sidebar from "../SideBar";


export default function Settings() {
  return (
    <div className='min-h-screen bg-slate-900'>
      <Sidebar />
      <main className='ml-64 p-8'>
        <div className='max-w-3xl mx-auto'>
          <h1 className='text-3xl font-bold text-white mb-8'>Settings</h1>

          <div className='space-y-6'>
            <section className='bg-slate-800/30 rounded-lg p-6'>
              <h2 className='text-xl font-semibold text-white mb-6'>
                Profile Settings
              </h2>
              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-slate-400 mb-2'>
                    Full Name
                  </label>
                  <div className='relative'>
                    <User className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
                    <input
                      type='text'
                      className='w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      defaultValue='HR Manager'
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-medium text-slate-400 mb-2'>
                    Email
                  </label>
                  <div className='relative'>
                    <Mail className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
                    <input
                      type='email'
                      className='w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
                      defaultValue='hr@company.com'
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className='bg-slate-800/30 rounded-lg p-6'>
              <h2 className='text-xl font-semibold text-white mb-6'>
                Notifications
              </h2>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3'>
                    <Bell className='w-5 h-5 text-slate-400' />
                    <span className='text-slate-300'>Email Notifications</span>
                  </div>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                      type='checkbox'
                      className='sr-only peer'
                      defaultChecked
                    />
                    <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-500/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-500"></div>
                  </label>
                </div>
              </div>
            </section>

            <section className='bg-slate-800/30 rounded-lg p-6'>
              <h2 className='text-xl font-semibold text-white mb-6'>
                Security
              </h2>
              <div className='space-y-4'>
                <button className='flex items-center gap-2 text-purple-400 hover:text-purple-300'>
                  <Shield className='w-5 h-5' />
                  Change Password
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
