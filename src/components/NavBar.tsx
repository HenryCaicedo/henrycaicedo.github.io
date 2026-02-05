import React, { useState } from 'react';
import { AlertCircle, Menu, X } from 'lucide-react';


interface ItemProps {
  word?: string;
}

function Item({ word }: ItemProps) {
  return <li>
    <button className='py-2 px-3 border-b-[3px] border-transparent rounded-2xl hover:bg-opacity-60
            hover:border-blue-500 transition-all duration-150 hover:bg-blue-500
              active:border-b-0 active:mt-[3px]
            text-base md:text-lg font-semibold text-white
            select-none'>
      {word || 'missing'}
    </button>
  </li>;
}

function ContactButton() {
  return <li>
    <button className='py-2 px-3 border-b-[3px] rounded-2xl bg-opacity-60
            border-red-500 transition-all duration-150 bg-red-500
            hover:bg-opacity-70
            active:border-b-0 active:mt-[3px]
            text-base md:text-lg font-semibold text-white
            select-none'>
      Contact
    </button>
  </li>;
}

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className='flex justify-between items-center bg-[#1f1f1f] px-4 md:px-12 lg:px-24 xl:px-48 py-3'>
        <div className='bg-yellow-400 justify-between rounded-lg flex p-2 md:p-3 font-bold text-black text-xs md:text-sm lg:text-base'>
          <AlertCircle className='mr-2 md:mr-3 w-4 h-4 md:w-6 md:h-6' strokeWidth={2.7} />
          <span className='hidden sm:inline'>Website under development</span>
          <span className='sm:hidden'>Under dev</span>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden lg:flex space-x-8 items-center'>
          <Item word="Home" />
          <Item word="About" />
          <Item word="Skills" />
          <Item word="Project" />
          <ContactButton />
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='lg:hidden text-white p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='lg:hidden bg-[#1f1f1f] border-t border-gray-700'>
          <ul className='flex flex-col space-y-2 p-4'>
            <Item word="Home" />
            <Item word="About" />
            <Item word="Skills" />
            <Item word="Project" />
            <ContactButton />
          </ul>
        </div>
      )}
    </>
  );
}


