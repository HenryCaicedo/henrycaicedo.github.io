import React from 'react'
import photo from '../../images/graduation.jpg';



export default function About() {
  return (

    <div className='items-center justify-center space-y-8 md:space-y-0 md:space-x-12 lg:space-x-20 w-full flex flex-col md:flex-row flex-grow px-4 md:px-12 lg:px-24'>

      <div className='w-full md:w-7/12 lg:w-5/12 space-y-4 md:space-y-6'>
        <p className='text-lg sm:text-xl md:text-xl lg:text-2xl text-left text-slate-200'>
          I'm a Systems and Computer Engineer with experience in mobile and web software development,
          focusing on front-end development. I'm skilled in UI/UX implementation and prototyping tools.

        </p>
        <p className='text-lg sm:text-xl md:text-xl lg:text-2xl text-left text-slate-200'>
          I'm dedicated, organized, creative, and detail-oriented, which contributes to delivering
          high-quality solutions and ensuring optimal results in the projects I work on.
        </p>
      </div>

      <div className='bg-slate-600 rotate-3 w-64 h-80 md:w-72 md:h-[22rem] lg:w-[18rem] lg:h-[26rem] rounded-2xl text-center overflow-hidden border-b-2 border-slate-700'>
        <img src={photo} alt="Graduation photo" />
      </div>
    </div>
  );
}
