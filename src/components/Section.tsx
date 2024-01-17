import React from 'react';

interface SectionContainerProps {
  title: string;
  children?: React.ReactNode;
}

export default function Section({ title, children }: SectionContainerProps) {
  return (
    <div className='flex flex-col justify-center items-center bg-slate-900 text-center'>
      <div className='border-b-3 text-red-600 text-4xl font-semibold w-10'>
        <div className='flex items-center justify-center h-full border-b-[3px] border-red-600'>
          {title}
        </div>
      </div>

      <div className='h-min-20'>
        {children}
      </div>
    </div>
  );
}
