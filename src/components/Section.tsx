import React from 'react';

interface SectionContainerProps {
  title: string;
  children?: React.ReactNode;
}

export default function Section({ title, children }: SectionContainerProps) {
  return (
    <div className='flex flex-col justify-center items-center text-center space-y-10 md:space-y-15 lg:space-y-20'>
      <div className='text-white text-3xl md:text-4xl lg:text-5xl font-bold w-full capitalize'>
        <div className='flex items-center justify-center h-full border-b-[6px] border-transparent'>
          {title}
        </div>
      </div>
      <div className='min-h-20 w-full flex justify-center'>
        {children}
      </div>
    </div>
  );
}
