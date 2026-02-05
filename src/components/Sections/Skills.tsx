import React from 'react';
import { Smile } from 'lucide-react';
import { JavaScript, ReactIcon, CSS, Nodejs, TailwindCSS, Flutter, Java, HTML5, Figma, Photoshop, Angular, Nextjs, Shopify, WordPress } from '../../assets/icons';

interface PillProps {
  title: string;
  icon?: React.ElementType;
}

function Pill({ title, icon: Icon }: PillProps) {
  return (
    <div className='flex bg-slate-100 rounded-2xl items-center select-none overflow-hidden pe-12'>
      <div className='flex px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 space-x-3 md:space-x-4 transition duration-300 text-2xl md:text-3xl'>
        {Icon && <Icon className="w-6 h-6 md:w-9 md:h-9" />} {/* Conditionally render the icon */}
        <div>
          <h1 className='text-lg sm:text-xl md:text-2xl text-black'>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 w-full md:w-auto">
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
      <Pill title="Angular" icon={Angular} />
      <Pill title="Next.js" icon={Nextjs} />
      <Pill title="Shopify" icon={Shopify} />
      <Pill title="WordPress" icon={WordPress} />
    </div>
  );
}
