import React from 'react';

interface ItemProps {
  word?: string;
}

function Item({ word }: ItemProps) {
  return  <li>
            <button className='py-2 px-3 border-b-2 border-transparent rounded-2xl hover:bg-opacity-60
            hover:border-red-500 transition duration-200 hover:bg-red-500
            text-lg font-semibold text-white'>  
            {word || 'missing'}
            </button>
          </li>;
}

export default function NavBar() {
  return (
    <>
    <div className='flex justify-between items-center bg-[#1f1f1f] px-48 py-3'>
      <div className='bg-purple-600 w-14 h-14 space-between rounded-lg'>
        
      </div>
        <ul className='flex space-x-2 items-center'>
          <Item word="Home" />
          <Item word="About" />
          <Item word="Skills" />
          <Item word="Project" />
          <Item word="Contact" />
        </ul>


    </div>
    </>
  );
}


