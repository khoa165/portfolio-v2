import React from "react";
import Section from '../components/Section';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import styles from '../styles/Index.scss';

const Landing = () => {
  return (
    <div>
      <Section className="home" id="home" height="100vh"
        background={styles.backgroundPrimaryDark}>
        <Home />
      </Section>
      <Section className="about" id="about" height="100vh"
        padding="150px 0 100px 0"
        heading="ABOUT"
        background={styles.backgroundSecondaryDark}
        headingColor={styles.brandPrimaryColor}
        headingMargin="20px auto 100px auto">
        <About />
      </Section>
      <Section className="projects" id="projects" height="100vh"
        padding="150px 0 100px 0"
        heading="PROJECTS"
        background={styles.backgroundTertiaryDark}
        headingColor={styles.brandPrimaryColor}
        headingMargin="20px auto 0px auto">
        <Projects />
      </Section>
    </div>
  )
}
 
export default Landing;