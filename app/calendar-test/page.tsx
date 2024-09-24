'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Search,
  Bell,
  Filter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const daysOfWeek = ['MA', 'DI', 'WO', 'DO', 'VR', 'ZA', 'ZO'];
const months = [
  'Januari',
  'Februari',
  'Maart',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Augustus',
  'September',
  'Oktober',
  'November',
  'December',
];

export default function Component() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 11, 1)); // December 2024

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: days }, (_, i) => new Date(year, month, i + 1));
  };

  const days = getDaysInMonth(currentDate);

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <div className='max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
        <header className='flex justify-between items-center p-4 border-b'>
          <nav className='flex space-x-4'>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Marketplace
            </a>
            <a href='#' className='text-orange-500 font-medium'>
              Organisations
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Tasks
            </a>
            <a href='#' className='text-gray-600 hover:text-gray-900'>
              Groups
            </a>
          </nav>
          <div className='flex items-center space-x-4'>
            <Button
              variant='default'
              className='bg-green-500 hover:bg-green-600 text-white'
            >
              <Plus className='mr-2 h-4 w-4' /> New
            </Button>
            <Search className='text-gray-400' />
            <Bell className='text-gray-400' />
            <Avatar>
              <AvatarImage
                src='/placeholder.svg?height=32&width=32'
                alt='User'
              />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className='p-4'>
          <div className='flex justify-between items-center mb-4'>
            <div className='relative'>
              <select className='appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500'>
                <option>Calendar</option>
              </select>
              <ChevronRight className='absolute right-3 top-2.5 h-5 w-5 text-gray-400' />
            </div>
            <div className='flex items-center space-x-2'>
              <Button variant='outline' size='icon' onClick={prevMonth}>
                <ChevronLeft className='h-4 w-4' />
              </Button>
              <Button variant='outline' size='icon' onClick={nextMonth}>
                <ChevronRight className='h-4 w-4' />
              </Button>
              <h2 className='text-xl font-semibold'>
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <Button variant='outline' size='sm'>
                vandaag
              </Button>
            </div>
            <div className='flex items-center space-x-2'>
              <Filter className='text-gray-400' />
              <Button variant='outline' size='icon'>
                <Plus className='h-4 w-4' />
              </Button>
            </div>
          </div>
          <div className='grid grid-cols-7 gap-2'>
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className='text-center font-medium text-gray-500 py-2'
              >
                {day}
              </div>
            ))}
            {days.map((day, index) => (
              <div
                key={index}
                className='border rounded-lg p-2 h-32 overflow-y-auto'
              >
                <div className='text-right text-sm text-gray-500 mb-1'>
                  {day.getDate()}
                </div>
                <div className='space-y-1'>
                  <div className='bg-orange-100 text-orange-800 text-xs rounded p-1'>
                    Create group aanpassing
                  </div>
                  <div className='bg-green-100 text-green-800 text-xs rounded p-1'>
                    Create group aanpassing
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
