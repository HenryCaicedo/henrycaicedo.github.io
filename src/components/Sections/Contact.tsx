import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

interface CardProps {
    title: string;
    value?: string;
    url?: string;
    color?: string;
    icon: React.ElementType;
}

function Card({ title, value = 'null', icon: Icon, url, color = 'bg-slate-800' }: CardProps) {

    return (
        <div className='flex flex-col space-y-2 items-center'>

            <a href={url} target="_blank"
                className={`${color} rounded-full min-w-32 min-h-32 max-h-32 max-w-32 flex justify-center items-center
                hover:scale-110 transition ease-in-out duration-300 overflow-hidden`}>
                <div className='flex justify-center items-center h-full w-full
                bg-gradient-to-t from-black/25 to-transparent
                hover:scale-110 transition ease-in-out duration-300'>
                    <Icon className='w-14 h-14' color='#fff' strokeWidth={2} />
                </div>
            </a>

            <div>
                <h1 className='font-bold text-xl'>{title}</h1>
                <p>{value}</p>
            </div>
        </div>
    );
}

export default function Contact() {
    return (
        <div>
            <div className='flex space-x-10'>
                <Card title='LinkedIn' value='/caicedohenry' icon={Linkedin} color='bg-[#0e76a8]' url='https://www.linkedin.com/in/caicedohenry/' />
                <Card title='Email' value='heducapi@gmail.com' icon={Mail} color='bg-[#c71610]' url='mailto:heducapi@gmail.com' />
                <Card title='Github' value='HenryCaicedo' icon={Github} color='bg-[#2dba4e]' url='https://github.com/HenryCaicedo/' />
            </div>
        </div>
    );
}
