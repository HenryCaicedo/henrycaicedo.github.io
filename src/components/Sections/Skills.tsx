import React from 'react';
import { Smile } from 'lucide-react';


interface PillProps {
  title: string;
}

function Pill({ title }: PillProps) {
  return (
    <div className='bg-slate-600 border-slate-700 border-b-0 flex text-3xl
                    rounded-2xl items-center px-6 py-2 select-none space-x-4'>
      <Smile className='h-10 w-10' />
      <div>
        {title}
      </div>

    </div>
  );
}

export default function Skills() {
  return (
    <div className="grid grid-cols-2 gap-y-3 gap-x-2">
      <Pill title="Javascript" />
      <Pill title="CSS" />
      <Pill title="React" />
      <Pill title="NodeJS" />
      <Pill title="Tailwind" />
      <Pill title="Flutter" />
      <Pill title="Java" />
      <Pill title="HTML5" />
      <Pill title="Figma" />
      <Pill title="Photoshop" />
    </div>
  );
}
