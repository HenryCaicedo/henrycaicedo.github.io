import React from 'react';
import { ChevronsDown, FileDown } from 'lucide-react';
import portrait from '../../images/hc-portrait.png';


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

      <div className='items-center justify-center space-y-8 md:space-y-0 md:space-x-12 lg:space-x-24 w-full flex flex-col md:flex-row flex-grow mt-20 px-4 md:px-8'>

        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <div className='bg-slate-600 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full text-center overflow-hidden'>
            <img src={portrait} alt="Henry Caicedo Portrait" />
          </div>
        </div>

        <div className='w-full md:w-1/2 flex-col items-center md:items-start text-center md:text-left'>
          <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-2'>
            Hi,
          </h1>
          <h1 className='text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-2'>
            I'm Henry
          </h1>
          <h2 className='text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold'>software developer.</h2>
          <div>
          </div>
          <a target="_blank" href="https://drive.google.com/drive/folders/199injNk5IzHU8cbn6HgRuTOJitmdNrht?usp=sharing" className='flex border w-fit px-2 py-1 rounded-lg mt-3 border-white hover:border-opacity-0
                                opacity-50 transition duration-200
                                hover:scale-105 hover:bg-white/20 hover:opacity-100 mx-auto md:mx-0'>
            <FileDown className='mr-2' />
            <h1 className='font-bold'>CV</h1>
          </a>
        </div>

      </div>

      <div className='w-full h-24 md:h-40 flex justify-center items-start'>
        <div className='animate-bounce'>
          <ChevronsDown className="w-12 h-12 md:w-16 md:h-16 mt-4 animate-pulse" />
        </div>
      </div>
    </div>
  );
}