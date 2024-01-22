import React from 'react'



function ProjectCard() {
    return (
        <div className='w-96 h-72 border-2 rounded-3xl'>
            <div className='bg-slate-400'>
                hello
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
