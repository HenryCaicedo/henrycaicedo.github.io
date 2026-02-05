import React from 'react'
import Section from './Section'
import Home from './Sections/Home'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'

export default function Body() {
        return (
                <>
                        <Home />
                        <div className='space-y-24 md:space-y-36 lg:space-y-48 my-3 mx-4 md:mx-8 '>
                                <Section title='About'>
                                        <About />
                                </Section>
                                <Section title='Skills'>
                                        <Skills />
                                </Section>
                                <Section title='Projects'>
                                        <Projects />
                                </Section>
                                <Section title='Contact'>
                                        <Contact />
                                </Section>
                        </div>
                </>
        )
}
