import React from 'react'
import { Folder, ArrowUpRight } from 'lucide-react'






function ProjectCard() {

    let tagStyle = 'bg-gray-200 rounded text-black px-2 py-1'

    return (
        <div className='w-96 h-72 border-2 rounded-3xl flex flex-col px-6 py-8 hover:scale-105 transition ease-in-out duration-300 select-none cursor-pointer'>
            <div className='flex justify-between'>
                <div className='space-y-2'>
                    <Folder className='h-12 w-12'/>
                    <h1 className='text-2xl font-bold uppercase'>Project Title</h1>
                </div>
                <div>
                    <ArrowUpRight className='w-9 h-9'/>
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
    )
}



export default function Projects() {
    return (
        <div className="grid grid-cols-3 gap-6">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}
