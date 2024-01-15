import React from 'react';

interface ItemProps {
  word?: string;
}

function Item({ word }: ItemProps) {
  return  <li className='flex items-center mt-2 hover:mt-0'>
            <button className='px-3 py-2 mb-2 bg-red-400 hover:bg-red-200 hover:border-b-2 hover:m-0'>  
            {word || 'missing'}
            </button>
          </li>;
}

export default function NavBar() {
  return (
    <>
    <div className='flex justify-between items-center bg-blue-200 px-32 py-3'>
      <div className='bg-purple-600 w-10 h-10 space-between'>
        
      </div>
        <ul className='flex space-x-3 items-center'>
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


