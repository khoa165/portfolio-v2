import React, { useState } from 'react';
import { Icon } from 'semantic-ui-react';
import Typist from 'react-typist';
import Cursor from 'react-typist';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import '../styles/Home.scss';

const Home = () => {
	const [typer, setTyper] = useState({ typeDelay: 40, typeSpeed: 70 });
	const { typeDelay, typeSpeed } = typer;
	const speedUpTyper = () => setTyper({ typeDelay: 0, typeSpeed: 150 });
	const typingDone = () => {
		const btn = document.querySelector('#home .elegant-button');
		btn.classList.remove('d-none');
		btn.classList.add('animated', 'bounceInLeft', 'delay-1s');

		const mediaBtns = document.querySelector('#home .social-media');
		mediaBtns.classList.remove('d-none');
		mediaBtns.classList.add('animated', 'zoomIn', 'delay-1s');
	};

	const goToContact = (e) => {
		e.preventDefault();
		const contact = document.querySelector('#contact');
		scrollIntoView(contact, {
			scrollMode: 'if-needed',
			block: 'start',
			inline: 'nearest',
			duration: window.innerWidth > 499 ? 100 : 1500,
			ease: (t) =>
				t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
		});
	};

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
				<a
					href='https://khoa165.github.io/'
					rel='noopener noreferrer'
					target='_blank'
				>
					<Icon name='blogger' />
				</a>
				<a
					href='https://www.hackerrank.com/khoa1652000'
					rel='noopener noreferrer'
					target='_blank'
				>
					<i className='fab fa-hackerrank'></i>
				</a>
			</div>
			<div onClick={speedUpTyper}>
				<div className='container'>
					<Typist
						startDelay={1000}
						onTypingDone={typingDone}
						className='typing-title'
						avgTypingDelay={typeDelay}
						avgTypingSpeed={typeSpeed}
					>
						Hello, I'm Khoa Thien Le (Harry)
						<br />
						<span className='job-title'>Junior Software Developer</span>
						<Cursor show={true} element='|' />
					</Typist>
					<button className='elegant-button d-none' onClick={goToContact}>
						Let's chat...
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
