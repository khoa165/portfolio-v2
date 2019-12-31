import React from 'react';
import Typist from 'react-typist';
import Cursor from 'react-typist';
import Particles from 'react-particles-js';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import styles from '../styles/Index.scss';
import '../styles/Home.scss';

class Home extends React.Component {
  state = { typeDelay: 40, typeSpeed: 70 };
  speedUpTyper = () => this.setState({ typeDelay: 0, typeSpeed: 150 });
  typingDone = () => {
    const btn = document.querySelector('#home .elegant-button');
    btn.classList.remove('d-none');
  };
  goToContact = e => {
    e.preventDefault();
    const contact = document.querySelector('#contact');
    scrollIntoView(contact, {
      scrollMode: 'if-needed',
      block: 'start',
      inline: 'nearest',
      duration: window.innerWidth > 499 ? 100 : 1500,
      ease: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    });
  };
  render() {
    return (
      <div onClick={this.speedUpTyper}>
        <Particles
          className="particle-canvas"
          params={{
            particles: {
              number: {value: 100, density: {enable: false}},
              color: {value: [styles.brandPrimaryColor, styles.brandSecondaryColor]},
              shape: {
                stroke: {width: 0, color: '#000'},
                polygon: {nb_sides: 6},
                type: 'polygon'
              },
              size: {value: 15, random: true, anim: {speed: 4, size_min: 10}},
              opacity: {value: 0.2, random: true, anim: {enable: false}},
              line_linked: {enable: false},
              move: {random: true, speed: 2, direction: 'top', out_mode: 'out'}
            },
            interactivity: {
              events: {onhover: {enable: true, mode: 'bubble'}},
              modes: {bubble: {distance: 200, duration: 2, size: 10, opacity: 1}}
            },
            retina_detect: true
          }}
        />

        <div className="container">
          <Typist
            startDelay={1000}
            onTypingDone={this.typingDone}
            className="typing-title"
            avgTypingDelay={this.state.typeDelay}
            avgTypingSpeed={this.state.typeSpeed}>
            Hello, I'm Khoa Thien Le (Harry)
            <br />
            <span className="job-title">Aspiring Software Developer</span>
            <Cursor show={true} element="|" />
          </Typist>
          <button className="elegant-button d-none" onClick={this.goToContact}>
            Let's chat...
          </button>
        </div>
      </div>
    );
  }
}
 
export default Home;