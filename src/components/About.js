import React, { useState } from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import { Container, Row, Col, Button } from 'reactstrap';
import Avatar from './core/Avatar';
import { mainBio, additionalBio, lastParaBio } from '../constants/about';
import '../styles/About.scss';

const About = () => {
	const [expand, setExpand] = useState(false);
	const toggle = () => setExpand(!expand);
	const goToAboutAndToggle = (e) => {
		e.preventDefault();
		const about = document.querySelector('#about');
		scrollIntoView(about, {
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
			<Row className='align-items-start'>
				<Col xs='12' lg='7' className='info order-2 order-lg-1'>
					{mainBio.map((text, k) => (
						<p key={k}>{text}</p>
					))}
					{!expand ? (
						<p className='see-more-statement'>
							Expand to
							<Button size='sm' onClick={toggle}>
								read more
							</Button>
							about the beginning of my coding journey.
						</p>
					) : null}
				</Col>
				<Col lg='4' className='profile-pic order-1 order-lg-2'>
					<Avatar />
				</Col>
			</Row>
			{expand && (
				<div className='extra-info'>
					<div>
						{additionalBio.map((text, k) => (
							<p key={k}>{text}</p>
						))}
						<p>
							{lastParaBio}
							<a href='#about' onClick={goToAboutAndToggle}>
								See less
							</a>
						</p>
					</div>
				</div>
			)}
		</Container>
	);
};

export default About;
