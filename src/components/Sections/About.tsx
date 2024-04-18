import React from 'react'
import photo from '../../images/graduation.jpg';



export default function About() {
  return (

    <div className='items-center justify-center space-x-20 w-full flex flex-grow px-24'>

      <div className='bg-slate-600 w-[22rem] h-[32rem] rounded-2xl text-center overflow-hidden border-b-2 border-slate-700'>
        <img src={photo} />
      </div>

      <div className='w-1/3'>
        <p className='text-2xl text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam reiciendis doloremque aliquam, provident inventore,
          beatae alias numquam animi aperiam sed quos nostrum,
          recusandae nisi! Delectus ab quae optio alias debitis.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Dolor obcaecati ut nisi quo tempore possimus assumenda doloribus.
        </p>
      </div>

    </div>
  );
}
