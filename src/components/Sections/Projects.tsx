import React from 'react'



function ProjectCard() {
    return (
        <div className='w-96 h-20'>
            Project
        </div>
    )
}



export default function Projects() {
    return (
        <div className="grid grid-cols-3 gap-y-3 gap-x-2">
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
        </div>
    )
}
