import { AlertCircle } from 'lucide-react';


interface ItemProps {
  word?: string;
}

function Item({ word }: ItemProps) {
  return <li>
    <button className='py-2 px-3 border-b-[3px] border-transparent rounded-2xl hover:bg-opacity-60
            hover:border-blue-500 transition-all duration-150 hover:bg-blue-500
              active:border-b-0 active:mt-[3px]
            text-lg font-semibold text-white
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
            text-lg font-semibold text-white
            select-none'>
       Contact
    </button>
  </li>;
}

export default function NavBar() {
  return (
    <>
      <div className='flex justify-between items-center bg-[#1f1f1f] px-48 py-3'>
        <div className='bg-red-900 space-between rounded-lg flex p-3 font-bold'>
          <AlertCircle className='mr-3'/>
          Website under development
        </div>
        <ul className='flex space-x-8 items-center'>
          <Item word="Home" />
          <Item word="About" />
          <Item word="Skills" />
          <Item word="Project" />
          <ContactButton/>
        </ul>


      </div>
    </>
  );
}


