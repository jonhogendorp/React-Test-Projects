'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

// Types
type Task = {
  id: string;
  title: string;
  color: 'green' | 'orange';
  time?: string;
  description?: string;
};

type ViewType = 'board' | 'calendar';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState<ViewType>('calendar');

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Dummy tasks data
  const dummyTasks: { [key: string]: Task[] } = {
    '2024-12-05': [
      {
        id: '1',
        title: 'Create group aanpassing',
        color: 'orange',
        time: '09:00',
        description: 'Update group settings and permissions',
      },
      {
        id: '2',
        title: 'Create group aanpassing',
        color: 'green',
        time: '14:00',
        description: 'Review and implement group changes',
      },
    ],
    '2024-12-06': [
      {
        id: '3',
        title: 'Create group aanpassing',
        color: 'orange',
        time: '10:30',
        description: 'Configure new group parameters',
      },
      {
        id: '4',
        title: 'Create group aanpassing',
        color: 'green',
        time: '15:45',
        description: 'Finalize group modifications',
      },
    ],
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days: Array<{ date: Date | null; isCurrentMonth: boolean }> = [];

    // Adjust firstDayOfMonth to start from Monday (0) instead of Sunday (0)
    const adjustedFirstDayOfMonth = (firstDayOfMonth + 6) % 7;

    for (let i = adjustedFirstDayOfMonth - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month, -i),
        isCurrentMonth: false,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: new Date(year, month, i),
        isCurrentMonth: true,
      });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const changeMonth = (increment: number) => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + increment,
        1,
      ),
    );
  };

  const formatDateKey = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const getTasksForDate = (date: Date) => {
    return dummyTasks[formatDateKey(date)] || [];
  };

  const days = getDaysInMonth(currentDate);
  {
    /* sub set for english/dutch billigual */
  }
  const weekDays = ['MA', 'DI', 'WO', 'DO', 'VR', 'ZA', 'ZO'];

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isThisDayMonth = (date: Date) => {
    return (
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <div className='w-full h-fit bg-slate-400'>
      {/* View Toggle Buttons */}
      {/* <div className='mb-4 flex gap-2'>
        <button
          onClick={() => setView('board')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            view === 'board'
              ? 'bg-gray-200 text-gray-900'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Layout className='h-4 w-4' />
          <span>Board</span>
        </button>
        <button
          onClick={() => setView('calendar')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
            view === 'calendar'
              ? 'bg-gray-200 text-gray-900'
              : 'bg-white text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Monitor className='h-4 w-4' />
          <span>Mijn taken</span>
        </button>
      </div> */}

      <div className='bg-white rounded-lg shadow-sm overflow-hidden m-10'>
        <div className=''>
          <div className='flex items-center justify-start gap-6 mb-6 pt-4 pl-4'>
            <div className='flex items-center space-x-4'>
              <button
                onClick={() => changeMonth(-1)}
                className=' flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-200 border-solid'
              >
                <ChevronLeftIcon className='h-5 w-5' />
              </button>
              <button className='min-w-44'>
                <h2 className='text-lg font-medium'>
                  {currentDate.toLocaleString('default', {
                    month: 'long',
                    year: 'numeric',
                  })}
                </h2>
              </button>
              <button
                onClick={() => changeMonth(1)}
                className='flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-200 border-solid'
              >
                <ChevronRightIcon className='h-5 w-5' />
              </button>
            </div>
            <button className='text-green-500 hover:underline-offset-4 hover:underline'>
              Vandaag
            </button>
          </div>

          <div className='grid grid-cols-7 gap-px'>
            {weekDays.map((day) => (
              <div
                key={day}
                className='flex justify-center items-center bg-white p-2 text-sm font-medium text-gray-600'
              >
                {day}
              </div>
            ))}
          </div>
          <div className='grid grid-cols-7 '>
            {days.map((day, index) => (
              <div
                key={index}
                className='bg-white p-2 min-h-28 border-r border-t border-solid border-slate-200 cursor-pointer hover:bg-gray-50 transition-colors'
                onClick={() => day.date && handleDayClick(day.date)}
              >
                <div
                  className={`text-sm text-gray-600 mb-1 font-normal ${
                    day.date && isThisDayMonth(day.date)
                      ? isToday(day.date)
                        ? 'bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center'
                        : 'text-slate-900 font-semibold'
                      : ''
                  }`}
                >
                  {day.date?.getDate()}
                </div>
                {day.date &&
                  dummyTasks[formatDateKey(day.date)]?.map((task) => (
                    <div
                      key={task.id}
                      className={`text-xs p-1 mb-1 rounded ${
                        task.color === 'green'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-orange-100 text-orange-800'
                      }`}
                    >
                      {task.title}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 z-50 overflow-y-auto'>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black bg-opacity-25 transition-opacity'
            onClick={() => setIsModalOpen(false)}
          />

          {/* Modal */}
          <div className='flex min-h-full items-center justify-center p-4'>
            <div className='relative bg-white rounded-lg shadow-xl max-w-md w-full p-6'>
              {/* Close button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className='absolute top-4 right-4 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Close</span>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>

              {/* Modal content */}
              <div>
                <h2 className='text-lg font-semibold mb-4'>
                  Tasks for{' '}
                  {selectedDate?.toLocaleDateString('default', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </h2>

                <div className='space-y-4'>
                  {selectedDate &&
                    getTasksForDate(selectedDate).map((task) => (
                      <div
                        key={task.id}
                        className={`p-4 rounded-lg ${
                          task.color === 'green'
                            ? 'bg-green-50 border border-green-200'
                            : 'bg-orange-50 border border-orange-200'
                        }`}
                      >
                        <div className='flex justify-between items-start mb-2'>
                          <h3 className='font-medium'>{task.title}</h3>
                          <span className='text-sm text-gray-600'>
                            {task.time}
                          </span>
                        </div>
                        <p className='text-sm text-gray-600'>
                          {task.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
