import React, { useState } from 'react';
import { Folder, ArrowUpRight } from 'lucide-react'
import projectBg from '../../assets/projects/images/wos.png';
import projectsList from '../../assets/projects/projectsList';

interface ProjectCardProps {
    name: string;
    description: string;
    tags?: string[];
    img?: string;
    url: string;
}

function ProjectCard({ name, description, tags = [], img = projectBg, url }: ProjectCardProps) {

    const tagStyle = 'bg-gray-200 rounded text-black px-2 py-1'

    const c1 =
        <div className='bg-black bg-opacity-40 flex flex-col p-6 transition-opacity duration-300'>
            <div className='flex justify-between'>
                <div className='space-y-2'>
                    <Folder className='h-12 w-12' />
                    <h1 className='text-2xl font-bold uppercase text-left'>
                        {name}
                    </h1>
                </div>
                <div>
                    <ArrowUpRight className='w-9 h-9' />
                </div>
            </div>
            <div className='flex-grow text-left'>
                <p className='font-semibold'>
                    {description}
                </p>
            </div>
            <div className="flex justify-end space-x-4 font-semibold">
                {tags.map((tag, index) => (
                    <div key={index} className={tagStyle}>
                        {tag}
                    </div>
                ))}
            </div>
        </div>

    const c2 =
        <div className='flex items-end h-full w-full justify-start py-8 px-6
            bg-gradient-to-t from-black/25 to-transparent transition-opacity duration-300'>

            <h1 className='uppercase text-left font-bold text-3xl'>
                {name}
            </h1>
        </div>


    return (
        <a href={url} target="_blank">
            <div className='w-80 h-72 border-b-[3px] rounded-lg flex flex-col items-center justify-center border-gray-800
        hover:scale-105 transition ease-in-out duration-300
        select-none cursor-pointer
        hover:bg-white hover:bg-opacity-5 active:bg-opacity-10 overflow-hidden'>
                <div className='relative w-full h-full items-center flex'>
                    <div className='absolute w-full h-full text-center justify-center flex z-20 pointer-events-none'>
                        {c2}
                    </div>
                    <div className='absolute w-full h-full text-center justify-center flex z-10 pointer-events-none'>
                        {/*c2*/}
                    </div>
                    <div className='absolute w-full h-full z-0'>
                        <img src={img}
                            alt="Project Background"
                            className='h-full w-full hover:scale-125 hover:blur-sm transition ease-in-out duration-300 z-0 object-cover'

                        />
                    </div>
                </div>

            </div>
        </a>
    )
}


export default function Projects() {

    return (
        <div className="grid grid-cols-3 gap-8">
            {projectsList.map((project, index) => (
                <ProjectCard
                    key={index}
                    name={project.name}
                    description={project.description}
                    tags={project.tags}
                    img={project.img}
                    url={project.url}
                />
            ))}
        </div>
    );
}

