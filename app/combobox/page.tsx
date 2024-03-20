import React from 'react';
import ComboBoxExample from './ComboBoxExample';

const page = () => {
  return (
    <div className='bg-white flex flex-col w-full h-screen justify-center items-center'>
      <h2 className='text-red-500 text-3xl font-semibold'>Combobox</h2>
      <ComboBoxExample />
    </div>
  );
};

export default page;
