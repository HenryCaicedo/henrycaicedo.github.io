import React from 'react';

export default function Home() {
  return (
    <div className='h-screen flex items-center justify-center space-x-28'>
      <div className='w-1/2 flex justify-end'>
        <div className='bg-slate-600 w-60 h-60 rounded-full text-center'>
          PHOTO
        </div>
        {//<img
         // src='your-photo.jpg'
         // alt='Your Photo'
         // className='w-1/2 max-w-xs rounded-full'
        //>
        }
      </div>
      <div className='w-1/2 flex-col items-start'>
        <h1 className='text-6xl font-bold mb-2'>
          Hi,
        </h1>
        <h1 className='text-6xl font-bold mb-2'>
          I'm Henry
        </h1>
        <h2 className='text-4xl font-semibold'>Web Developer.</h2>
      </div>
    </div>
  );
}

// TODO: Agregar flechitas bajando y destellando
