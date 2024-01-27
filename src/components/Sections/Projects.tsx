import React, { useState } from 'react';
import { Folder, ArrowUpRight } from 'lucide-react'
import projectBg from '../../images/project_bg.jpg';






function ProjectCard() {

    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    let tagStyle = 'bg-gray-200 rounded text-black px-2 py-1'

    let c1 =
        <div className='bg-black bg-opacity-40 flex flex-col p-6 transition-opacity duration-300'>
            <div className='flex justify-between'>
                <div className='space-y-2'>
                    <Folder className='h-12 w-12' />
                    <h1 className='text-2xl font-bold uppercase'>Project Title</h1>
                </div>
                <div>
                    <ArrowUpRight className='w-9 h-9' />
                </div>
            </div>
            <div className='flex-grow text-left'>
                <p>
                    Lorem ipsum dolor sit amet consectetur ad adipisicing elit. Ad, aspernatur iste! Dignissi mos at fugiat quos.
                </p>
            </div>
            <div className='flex justify-end space-x-4 font-semibold'>
                <div className={tagStyle}>
                    Tag 1
                </div>
                <div className={tagStyle}>
                    Tag 2
                </div>
                <div className={tagStyle}>
                    Tag 3
                </div>
            </div>
        </div>

    let c2 =
        <div className='flex items-end h-full w-full justify-start py-8 px-6
            bg-gradient-to-t from-black/25 to-transparent transition-opacity duration-300'>

            <h1 className='uppercase text-left font-bold text-3xl'>
                Bungee Jumping Simulator
            </h1>
        </div>

    let currentComponent = isHovered ? c1 : c2

    return (
        <div className='w-80 h-72 border-b-[3px] rounded-lg flex flex-col items-center justify-center border-gray-800
        hover:scale-105 transition ease-in-out duration-300
        select-none cursor-pointer
        hover:bg-white hover:bg-opacity-5 active:bg-opacity-10 overflow-hidden'
            onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='relative w-full h-full items-center flex'>
                <div className='absolute w-full h-full text-center justify-center flex z-10 pointer-events-none'>
                    {currentComponent}
                </div>
                <div className='absolute w-full h-full z-0'>
                    <img src={projectBg}
                        alt="Project Background"
                        className='h-full w-full hover:scale-125 hover:blur-sm transition ease-in-out duration-300 z-0'
                    />
                </div>
            </div>

        </div>
    )
}


function MyComponent() {

    let c1 = <div>Hola</div>
    let c2 = <div>Adiós</div>
    return (
        <div>
            {c1}
        </div>
    )
}


export default function Projects() {
    return (
        <div className="grid grid-cols-3 gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    )
}
