// pages/index.tsx

import React from 'react';
import HorizontalScroll from './HorizontalScrollDragComp';

const Home: React.FC = () => {
  return (
    <div  className='max-w-[500px] '>
      <h1>Horizontal Scroll Example</h1>
      <HorizontalScroll >
        <div className='min-w-[200px] m-2.5 bg-slate-400 border border-solid border-slate-950 text-center'>Item 1</div>
        <div className='min-w-[200px] m-2.5 bg-slate-400 border border-solid border-slate-950 text-center'>Item 2</div>
        <div className='min-w-[200px] m-2.5 bg-slate-400 border border-solid border-slate-950 text-center'>Item 3</div>
        <div className='min-w-[200px] m-2.5 bg-slate-400 border border-solid border-slate-950 text-center'>Item 4</div>
        <div className='min-w-[200px] m-2.5 bg-slate-400 border border-solid border-slate-950 text-center'>Item 5</div>
      </HorizontalScroll>
    </div>
  );
};

export default Home;
