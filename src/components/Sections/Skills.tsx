import React from 'react';
import { Smile } from 'lucide-react';
import { JavaScript, ReactIcon, CSS, Nodejs, TailwindCSS, Flutter, Java, HTML5, Figma, Photoshop } from '../../assets/icons';

interface PillProps {
  title: string;
  icon?: React.ElementType;
}

function Pill({ title, icon: Icon }: PillProps) {
  return (
    <div className='bg-slate-100  rounded-2xl items-center  select-none overflow-hidden'>
      <div className='flex px-8 py-4 space-x-4 transition duration-300 text-3xl'>
        {Icon && <Icon width="36px" height="36px" />} {/* Conditionally render the icon */}
        <div>
          <h1 className='text-2xl text-black'>
            {title}
          </h1>
        </div>
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
      <Pill title="Node.js" icon={Nodejs} />
      <Pill title="Tailwind" icon={TailwindCSS} />
      <Pill title="Flutter" icon={Flutter} />
      <Pill title="Java" icon={Java} />
      <Pill title="HTML5" icon={HTML5} />
      <Pill title="Figma" icon={Figma} />
      <Pill title="Photoshop" icon={Photoshop} />
    </div>
  );
}
