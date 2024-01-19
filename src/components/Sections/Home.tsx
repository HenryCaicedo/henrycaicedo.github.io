import React from 'react';
import { ChevronsDown } from 'lucide-react';


function ScrollArrow() {
  return (


    <div className="w-64 h-64 overflow-hidden inline-block bg-green-800 relative">
      <div className="h-12 w-12 border-8 border-red-500 -rotate-45 transform origin-top-left"></div>
      <div className="h-2 w-10 bg-white absolute inset-1/2"
        style={{
          left: '50%',
          transform: 'translateX(0rem)'
        }}></div>
      <div className="h-2 w-10 bg-white transform absolute bottom-2 left-0 rotate-20"></div>
    </div>

  )
}



export default function Home() {
  return (
    <div className='h-screen flex flex-col'>

      <div className='items-center justify-center space-x-28 w-full flex flex-grow mt-20'>

        <div className='w-1/2 flex justify-end'>
          <div className='bg-slate-600 w-60 h-60 rounded-full text-center'>
            PHOTO
          </div>
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

      <div className='w-full h-40 flex justify-center items-start'>
        <div className='animate-bounce slow'>
          <ChevronsDown className="w-16 h-16 mt-4 animate-pulse" />

        </div>
      </div>
    </div>
  );
}

// TODO: Agregar flechitas bajando y destellando
