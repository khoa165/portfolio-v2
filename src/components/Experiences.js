import React, { useState, Fragment } from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import { Container, Button } from 'reactstrap';
import Experience from './Experience';
import {
	upcomingExperience,
	mainExperiences,
	extraExperiences,
} from '../constants/experiences';
import '../styles/Experiences.scss';

const Experiences = () => {
	const [expand, setExpand] = useState(false);
	const toggle = () => setExpand(!expand);
	const goToExperiencesAndToggle = (e) => {
		e.preventDefault();
		const experiences = document.querySelector('#experiences');
		scrollIntoView(experiences, {
			scrollMode: 'if-needed',
			block: 'start',
			inline: 'nearest',
			duration: window.innerWidth > 499 ? 100 : 1500,
			ease: (t) =>
				t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
		});
		toggle();
	};

	return (
		<Container>
			<Experience {...upcomingExperience} />
			{mainExperiences.map((experience, index) => {
				return <Experience {...experience} key={index} />;
			})}
			{expand ? (
				<Fragment>
					{extraExperiences.map((experience, index) => {
						return <Experience {...experience} key={index} />;
					})}
					<a href='#experiences' onClick={goToExperiencesAndToggle}>
						See less
					</a>
				</Fragment>
			) : (
				<p className='see-more-statement'>
					If you are not bored yet,
					<Button size='sm' onClick={() => toggle()}>
						Expand
					</Button>
					to learn more about my other experiences.
				</p>
			)}
		</Container>
	);
};

export default Experiences;
