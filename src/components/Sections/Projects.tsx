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

console.log('projectBg: ', projectBg)

function ProjectCard({ name, description, tags = [], img = projectBg, url }: ProjectCardProps) {

    const tagStyle = 'backdrop-filter backdrop-blur-lg bg-white bg-opacity-50 rounded text-black px-2 py-1'
    console.log('BG: ', img);

    const tags_comp =
        <div className="flex justify-end space-x-4 font-semibold">
            {tags.map((tag, index) => (
                <div key={index} className={tagStyle}>
                    {tag}
                </div>
            ))}
        </div>


    const c3 =
        <div className='h-full w-full relative flex'>
            <div className='absolute bg-gradient-to-t from-black/60 to-transparent h-full w-full z-0'>
            </div>
            <div className='absolute bg-black h-full w-full z-10 opacity-0
                            group-hover:opacity-30 transition duration-300'>
            </div>
            <div className='absolute h-full w-full z-20 flex flex-col p-6'>
                <div className='flex justify-between'>
                    <div className='space-y-2 group-hover:opacity-100 opacity-0 transition duration-300'>
                        <Folder size={50} strokeWidth={2.2} />
                        <h1 className='text-xl font-bold uppercase text-left'>
                            {name}
                        </h1>
                    </div>
                    <div>
                        <ArrowUpRight className='drop-shadow-lg' size={44} strokeWidth={2} />
                    </div>
                </div>
                <div className='flex-grow text-left group-hover:opacity-100 opacity-0 transition duration-300'>
                    <p className='font-semibold'>
                        {description}
                    </p>
                </div>
                <div className='w-full h-full flex justify-end items-end space-x-1
                                opacity-0 group-hover:opacity-100 transition duration-300'>
                    {tags.map((tag, index) => (
                        <div key={index} className='bg-white bg-opacity-80 rounded text-black font-medium px-2 py-1'>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute h-full w-full flex items-end justify-start p-8 z-30'>
                <h1 className='text-left font-bold text-3xl group-hover:opacity-0 opacity-100 transition'>
                    {name}
                </h1>
            </div>

        </div>



    return (
        <a href={url} target="_blank">
            <div className='w-80 h-72 rounded-lg flex flex-col items-center justify-center
                        hover:scale-105 transition ease-in-out duration-300 group
                        select-none cursor-pointer
                      hover:bg-white hover:bg-opacity-5 active:bg-opacity-10 overflow-hidden'>
                <div className='relative w-full h-full items-center flex'>
                    <div className='absolute w-full h-full text-center justify-center flex z-20 pointer-events-none'>
                        {c3}
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
        <div className="grid grid-cols-3 gap-8 justify-center">
            {projectsList.map((project, index) => (
                < ProjectCard
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
