import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { X } from "lucide-react";
import ApplicationForm from "./ApplicationForm";

export default function ApplicationModal({ isOpen, closeModal, job }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/75' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-2xl transform overflow-hidden rounded-xl bg-slate-800 p-6 shadow-xl transition-all'>
                <div className='flex items-center justify-between mb-4'>
                  <Dialog.Title className='text-xl font-semibold text-white'>
                    Apply for {job.title}
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className='text-slate-400 hover:text-white transition-colors'
                  >
                    <X className='w-5 h-5' />
                  </button>
                </div>
                <ApplicationForm job={job} onSuccess={closeModal} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
