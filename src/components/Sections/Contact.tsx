import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

interface CardProps {
    title: string;
    value?: string;
    url?: string;
    icon: React.ElementType; // Use React.ElementType as the type for the icon property
}

function Card({ title, value = 'null', icon: Icon }: CardProps) {
    return (
        <div className='flex flex-col space-y-2 items-center'>
            <div className='bg-slate-200 rounded-full text-black min-w-32 min-h-32 max-h-32 max-w-32 flex justify-center items-center'>
                <Icon className='w-12 h-12' />
            </div>
            <div>
                <h1>{title}</h1>
                <p>{value}</p>
            </div>
        </div>
    );
}

export default function Contact() {
    return (
        <div>
            <div className='flex space-x-10'>
                <Card title='LinkedIn' value='/heducapi' icon={Linkedin} />
                <Card title='Email' value='heducapi@gmail.com' icon={Mail} />
                <Card title='Github' value='HenryCaicedo' icon={Github} />
            </div>
        </div>
    );
}
