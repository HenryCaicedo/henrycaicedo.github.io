import React from 'react'
import photo from '../../images/graduation.jpg';



export default function About() {
  return (

    <div className='items-center justify-center space-x-20 w-full flex flex-grow px-24'>


      <div className='w-1/3'>
        <p className='text-2xl text-left text-slate-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam reiciendis doloremque aliquam, provident inventore,
          beatae alias numquam animi aperiam sed quos nostrum,
          recusandae nisi! Delectus ab quae optio alias debitis.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolor obcaecati ut nisi quo tempore possimus assumenda doloribus.
        </p>
      </div>

      <div className='bg-slate-600 rotate-3 w-[18rem] h-[26rem] rounded-2xl text-center overflow-hidden border-b-2 border-slate-700'>
        <img src={photo} />
      </div>
    </div>
  );
}
