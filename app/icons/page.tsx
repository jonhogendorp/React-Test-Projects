import React from 'react';
import AllIcons from './AllIcons';
import {
  TvIcon,
  EyeIcon,
  RectangleGroupIcon,
  CogIcon,
  GifIcon,
  MapIcon,
  SunIcon,
} from '@heroicons/react/24/solid';

const page = () => {
  return (
    <div className='h-full w-full flex justify-center items-center '>
      <div className=''>
        <TvIcon className='h-6 w-6' />
        <EyeIcon className='h-6 w-6' />
        <RectangleGroupIcon className='h-6 w-6' />
        <AllIcons />
      </div>
    </div>
  );
};

export default page;
