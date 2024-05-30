// components/HorizontalScroll.tsx
'use client'

import React, { useRef, useState, useEffect } from 'react';


interface HorizontalScrollProps {
        children: React.ReactNode;
        }


const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children } ) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const handleMouseDown = (e: MouseEvent) => {
      if (!scrollContainer) return;
      setIsDragging(true);
      setStartX(e.pageX - scrollContainer.offsetLeft);
      setScrollLeft(scrollContainer.scrollLeft);
    };

    const handleMouseLeave = () => {
      setIsDragging(false);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !scrollContainer) return;
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Multiply by 2 for faster scroll
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('mousedown', handleMouseDown);
      scrollContainer.addEventListener('mouseleave', handleMouseLeave);
      scrollContainer.addEventListener('mouseup', handleMouseUp);
      scrollContainer.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('mouseup', handleMouseUp);
        scrollContainer.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isDragging, startX, scrollLeft]);

  return (
    <div className=' min-h-[200px] flex overflow-x-auto cursor-grab active:cursor-grabbing' ref={scrollRef}>
      {children}
    </div>
  );
};

export default HorizontalScroll;
