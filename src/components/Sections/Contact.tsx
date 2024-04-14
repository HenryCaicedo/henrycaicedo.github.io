import React from 'react'


interface CardProps {
    title: string;
  }


function Card({ title }: CardProps) {
    return (
        <>
            <div className='bg-slate-200 rounded-lg text-black'> 
                {title}
            </div>
        </>
    )
}



export default function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>My social network</p>
            <div className='flex flex-col space-y-2'>
                <Card title='LinkedIn'/>
                <Card title='Gmail'/>
                <Card title='Github'/>
                <Card title=''/>
            </div>

        </div>
    )
}
