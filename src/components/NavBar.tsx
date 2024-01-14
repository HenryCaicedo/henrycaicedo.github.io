import React from 'react';

interface ItemProps {
  word?: string;
}

function Item({ word }: ItemProps) {
  return  <li>
            <button className='bg-blue-200 rounded-none'>  
            {word || 'missing'}

            </button>
          </li>;
}

export default function NavBar() {
  return (
    <nav>
      <ul className='flex space-x-3'>
        <Item word="Home" />
        <Item word="About" />
        <Item word="Skills" />
        <Item word="Project" />
        <Item word="Contact" />
      </ul>
    </nav>
  );
}


