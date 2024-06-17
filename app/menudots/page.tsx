import React from 'react';
import MenuLeave from './MenuLeave';

export default function MenuDots() {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-between items-center gap-5 '>
        <MenuLeave />
        <MenuLeave />
      </div>
    </div>
  );
}
