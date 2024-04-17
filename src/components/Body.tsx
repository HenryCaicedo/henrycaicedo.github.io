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
                        <div className='space-y-52 my-3 mx-2'>
                                <Section title='About'>
                                        <About />
                                </Section>
                                <Section title='Skills'>
                                        <Skills/>
                                </Section>
                                <Section title='Projects'>
                                        <Projects/>
                                </Section>
                                <Section title='Contact'>
                                        <Contact/>
                                </Section>
                        </div>
                </>
        )
}
