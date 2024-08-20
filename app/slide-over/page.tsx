'use client';

import { useState } from 'react';
import { TvIcon } from '@heroicons/react/24/solid';
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function Example() {
  const [open, setOpen] = useState(true);

  return (
    <div className='h-screen flex items-center justify-center'>
      <button
        className='border border-solid border-lime-300 bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded-full shadow-md'
        onClick={() => setOpen(true)}
      >
        Open Panel
      </button>
      <TvIcon className='h-6 w-6 text-lime-500' />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className='relative z-10'
      >
        {/* <DialogBackdrop
                        transition
                        className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0'
                /> */}

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <DialogPanel className='pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700'>
                <Transition show={open}>
                  <TransitionChild>
                    <div className='absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4'>
                      <button
                        type='button'
                        onClick={() => setOpen(false)}
                        className='relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
                      >
                        <span className='absolute -inset-2.5' />
                        <span className='sr-only'>Close panel</span>
                        <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                      </button>
                    </div>
                  </TransitionChild>
                </Transition>
                <div className='flex flex-col h-[80vh] bg-white py-6 shadow-xl'>
                  <div className='bg-green-500 w-full absolute left-0 top-0 h-4 rounded-t-sm'></div>
                  <div className='px-4 sm:px-6 overflow-auto h-[80vh] items-start scrollbar scrollbar-track-base-200 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thumb-base-300'>
                    <DialogTitle className='text-base font-semibold leading-6 text-gray-900'>
                      Panel title
                    </DialogTitle>
                    <div className='relative mt-6 flex-1 px-4 sm:px-6 h-[700px]'>
                      <div className='absolute inset-0 px-4 sm:px-6'>
                        <div className='h-full border-2 border-dashed border-gray-200 rounded-lg' />
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
