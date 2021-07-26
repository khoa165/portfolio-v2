import React from 'react';
import Section from '../components/Section';
import Home from '../components/Home';
import About from '../components/About';
import Stats from '../components/Stats';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import ContactForm from '../components/ContactForm';
import colors from '../styles/Variables.scss';

const Landing = () => {
  return (
    <div>
      <Section
        id='home'
        height='100vh'
        background={colors.backgroundPrimaryDark}
        onMenu={true}
      >
        <Home />
      </Section>
      <Section
        id='about'
        height='100vh'
        padding='150px 0 100px 0'
        heading='ABOUT'
        background={colors.backgroundSecondaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin='20px auto 50px auto'
        onMenu={true}
      >
        <About />
      </Section>
      {/* <Section
        id='stats'
        background='#990047'
        width='auto'
        height='30vh'
        onMenu={false}
      >
        <Stats />
      </Section> */}
      <Section
        id='projects'
        height='100vh'
        padding='150px 0 100px 0'
        heading='PROJECTS'
        background={colors.backgroundTertiaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin='20px auto 50px auto'
        onMenu={true}
      >
        <Projects />
      </Section>
      <Section
        id='experiences'
        height='100vh'
        padding='150px 0 100px 0'
        heading='EXPERIENCES'
        background={colors.backgroundSecondaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin='20px auto 50px auto'
        onMenu={true}
      >
        <Experiences />
      </Section>
      <Section
        id='skills'
        height='100vh'
        padding='150px 0 100px 0'
        heading='SKILLS'
        background={colors.backgroundPrimaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin='20px auto 100px auto'
        onMenu={true}
      >
        <Skills />
      </Section>
      <Section
        id='education'
        height='100vh'
        padding='150px 0 100px 0'
        heading='EDUCATION'
        background={colors.backgroundSecondaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin='20px auto 100px auto'
        onMenu={true}
      >
        <Education />
      </Section>
      <Section
        id='resume'
        height='100vh'
        padding='150px 0 100px 0'
        heading='RESUME'
        background={colors.backgroundTertiaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin='20px auto 100px auto'
        onMenu={true}
      >
        <Resume />
      </Section>
      <Section
        id='contact'
        height='100vh'
        padding='150px 0 100px 0'
        heading='CONTACT'
        background={colors.backgroundSecondaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin='20px auto 100px auto'
        onMenu={true}
      >
        <ContactForm />
      </Section>
    </div>
  );
};

export default Landing;
