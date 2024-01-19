import React from 'react'
import Section from './Section'
import Home from './Sections/Home'
import About from './Sections/About'
import Skills from './Sections/Skills'

export default function Body() {
        return (
                <>
                        <Home />
                        <div className='space-y-4 my-3 mx-2'>
                                <Section title='About'>
                                        <About />
                                </Section>
                                <Section title='Skills'>
                                        <Skills/>
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
