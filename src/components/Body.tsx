import React from 'react'
import Section from './Section'
import About from './Sections/About'
import Home from './Sections/Home'

export default function Body() {
        return (
                <>
                        <Home/>
                        <div className='space-y-4 my-3 mx-2'>
                                <Section title='About'>
                                        <About />
                                </Section>
                                <Section title='Skills'>
                                        hola
                                </Section>
                                <Section title='Projects'>
                                        hola
                                </Section>
                                <Section title='Contact'>
                                        hola
                                </Section>
                        </div>
                </>
        )
}
