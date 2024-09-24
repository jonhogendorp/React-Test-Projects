'use client';

import React from 'react';
import { Calendar } from 'antd';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';

const page = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='p-20'>
        <Calendar onPanelChange={onPanelChange} />
      </div>
    </div>
  );
};

export default page;
