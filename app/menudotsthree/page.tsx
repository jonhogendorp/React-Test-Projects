import React from 'react';
import MenuThree from './MenuThree';

export default function Example() {
  return (
    <div className='bg-red-950 h-screen'>
      <div className=' flex flex-col justify-center items-center gap-5'>
        <MenuThree />
        <MenuThree />
      </div>
    </div>
  );
}
