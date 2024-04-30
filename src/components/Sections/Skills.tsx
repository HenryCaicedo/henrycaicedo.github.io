import React from 'react';
import { Smile } from 'lucide-react';
import { JavaScript, ReactIcon, CSS, Nodejs, TailwindCSS, Flutter, Java, HTML5, Figma, Photoshop } from '../../assets/icons';

interface PillProps {
  title: string;
  icon?: React.ElementType;
}

function Pill({ title, icon: Icon }: PillProps) {
  return (
    <div className='bg-slate-200 border-b-0 flex text-3xl rounded-2xl items-center px-8 py-4 select-none space-x-4 hover:scale-105 transition duration-300'>
      {Icon && <Icon width="34px" height="34px"/>} {/* Conditionally render the icon */}
      <div>
        <h1 className='text-2xl text-black'>
          {title}
        </h1>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-y-3 gap-x-3">
      <Pill title="Javascript" icon={JavaScript} />
      <Pill title="CSS" icon={CSS} />
      <Pill title="React" icon={ReactIcon} />
      <Pill title="NodeJS" icon={Nodejs} />
      <Pill title="Tailwind" icon={TailwindCSS} />
      <Pill title="Flutter" icon={Flutter} />
      <Pill title="Java" icon={Java} />
      <Pill title="HTML5" icon={HTML5} />
      <Pill title="Figma" icon={Figma} />
      <Pill title="Photoshop" icon={Photoshop} />
    </div>
  );
}
