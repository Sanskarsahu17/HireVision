import React from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";

export default function PersonalInfo() {
  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <h2 className='text-xl font-semibold text-white mb-6'>
        Personal Information
      </h2>

      <div className='grid gap-6 md:grid-cols-2'>
        <div>
          <label className='block text-sm font-medium text-slate-400 mb-2'>
            Full Name
          </label>
          <div className='relative'>
            <User className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
            <input
              type='text'
              className='w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Enter your full name'
              defaultValue='James Kinn'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-slate-400 mb-2'>
            Email Address
          </label>
          <div className='relative'>
            <Mail className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
            <input
              type='email'
              className='w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Enter your email'
              defaultValue='james.k@example.com'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-slate-400 mb-2'>
            Phone Number
          </label>
          <div className='relative'>
            <Phone className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
            <input
              type='tel'
              className='w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Enter your phone number'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-medium text-slate-400 mb-2'>
            Location
          </label>
          <div className='relative'>
            <MapPin className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
            <input
              type='text'
              className='w-full pl-10 pr-4 py-2 bg-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
              placeholder='Enter your location'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
