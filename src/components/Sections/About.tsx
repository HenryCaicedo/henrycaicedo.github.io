import React from 'react'
import photo from '../../images/graduation.jpg';



export default function About() {
  return (

    <div className='items-center justify-center space-x-20 w-full flex flex-grow px-24'>


      <div className='w-5/12 space-y-6'>
        <p className='text-2xl text-left text-slate-200'>
          I'm a Systems and Computer Engineer with experience in mobile and web software development,
          focusing on front-end development. I'm skilled in UI/UX implementation and prototyping tools.

        </p>
        <p className='text-2xl text-left text-slate-200'>
          I'm dedicated, organized, creative, and detail-oriented, which contributes to delivering
          high-quality solutions and ensuring optimal results in the projects I work on.
        </p>
      </div>

      <div className='bg-slate-600 rotate-3 w-[18rem] h-[26rem] rounded-2xl text-center overflow-hidden border-b-2 border-slate-700'>
        <img src={photo} />
      </div>
    </div>
  );
}
