import React from 'react';
import { Icon } from 'semantic-ui-react';
import Typist from 'react-typist';
import Cursor from 'react-typist';
import Particles from 'react-particles-js';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import colors from '../styles/Variables.scss';
import '../styles/Home.scss';

class Home extends React.Component {
  state = { typeDelay: 40, typeSpeed: 70 };
  speedUpTyper = () => this.setState({ typeDelay: 0, typeSpeed: 150 });
  typingDone = () => {
    const btn = document.querySelector('#home .elegant-button');
    btn.classList.remove('d-none');
    btn.classList.add('animated', 'bounceInLeft', 'delay-1s');

    const mediaBtns = document.querySelector('#home .social-media');
    mediaBtns.classList.remove('d-none');
    mediaBtns.classList.add('animated', 'zoomIn', 'delay-1s');
  };
  goToContact = e => {
    e.preventDefault();
    const contact = document.querySelector('#contact');
    scrollIntoView(contact, {
      scrollMode: 'if-needed',
      block: 'start',
      inline: 'nearest',
      duration: window.innerWidth > 499 ? 100 : 1500,
      ease: t =>
        t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    });
  };
  render() {
    return (
      <div>
        <div className='social-media d-none'>
          <a
            href='https://github.com/khoa165'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Icon name='github' />
          </a>
          <a
            href='https://www.linkedin.com/in/khoalethien/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <Icon name='linkedin' />
          </a>
        </div>
        <div onClick={this.speedUpTyper}>
          <Particles
            className='particle-canvas'
            params={{
              particles: {
                number: { value: 50, density: { enable: false } },
                color: {
                  value: [colors.brandPrimaryColor, colors.brandSecondaryColor]
                },
                shape: {
                  stroke: { width: 0, color: '#000' },
                  polygon: { nb_sides: 6 },
                  type: 'polygon'
                },
                size: {
                  value: 15,
                  random: true,
                  anim: { speed: 4, size_min: 10 }
                },
                opacity: { value: 0.2, random: true, anim: { enable: false } },
                line_linked: { enable: false },
                move: {
                  random: true,
                  speed: 2,
                  direction: 'top',
                  out_mode: 'out'
                }
              },
              interactivity: {
                events: { onhover: { enable: true, mode: 'bubble' } },
                modes: {
                  bubble: { distance: 200, duration: 2, size: 10, opacity: 1 }
                }
              },
              retina_detect: true
            }}
          />

          <div className='container'>
            <Typist
              startDelay={1000}
              onTypingDone={this.typingDone}
              className='typing-title'
              avgTypingDelay={this.state.typeDelay}
              avgTypingSpeed={this.state.typeSpeed}
            >
              Hello, I'm Khoa Thien Le (Harry)
              <br />
              <span className='job-title'>Aspiring Software Developer</span>
              <Cursor show={true} element='|' />
            </Typist>
            <button
              className='elegant-button d-none'
              onClick={this.goToContact}
            >
              Let's chat...
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
