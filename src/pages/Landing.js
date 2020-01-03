import React from "react";
import Section from '../components/Section';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import Education from "../components/Education";
import Skills from "../components/Skills";
import Resume from "../components/Resume";
import ContactForm from "../components/ContactForm";
import colors from '../styles/Variables.scss';

const Landing = () => {
  return (
    <div>
      <Section className="home" id="home" height="100vh"
        background={colors.backgroundPrimaryDark}>
        <Home />
      </Section>
      <Section className="about" id="about" height="100vh"
        padding="150px 0 100px 0"
        heading="ABOUT"
        background={colors.backgroundSecondaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin="20px auto 50px auto">
        <About />
      </Section>
      <Section className="projects" id="projects" height="100vh"
        padding="150px 0 100px 0"
        heading="PROJECTS"
        background={colors.backgroundTertiaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin="20px auto 50px auto">
        <Projects />
      </Section>
      <Section className="experiences" id="experiences" height="100vh"
        padding="150px 0 100px 0"
        heading="EXPERIENCES"
        background={colors.backgroundSecondaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin="20px auto 50px auto">
        <Experiences />
      </Section>
      <Section className="education" id="education" height="100vh"
        padding="150px 0 100px 0"
        heading="EDUCATION"
        background={colors.backgroundPrimaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin="20px auto 100px auto">
        <Education />
      </Section>
      <Section className="skills" id="skills" height="100vh"
        padding="150px 0 100px 0"
        heading="SKILLS"
        background={colors.backgroundSecondaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin="20px auto 100px auto">
        <Skills />
      </Section>
      <Section className="resume" id="resume" height="100vh"
        padding="150px 0 100px 0"
        heading="RESUME"
        background={colors.backgroundTertiaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin="20px auto 100px auto">
        <Resume />
      </Section>
      <Section className="contact" id="contact" height="100vh"
        padding="150px 0 100px 0"
        heading="CONTACT"
        background={colors.backgroundSecondaryDark}
        headingColor={colors.brandPrimaryColor}
        headingMargin="20px auto 100px auto">
        <ContactForm />
      </Section>
    </div>
  )
}
 
export default Landing;