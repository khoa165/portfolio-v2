import React, { useEffect } from 'react';
import Project from './Project';
import { projects } from '../constants/projects';
import '../styles/Projects.scss';

const Projects = () => {
	const run = () => {
		const items = document.querySelectorAll('#projects-line li');
		items.forEach((item) => {
			if (isInView(item)) {
				item.classList.add('show');
			}
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', run);
		window.addEventListener('load', run);
		window.addEventListener('resize', run);
		return () => {
			window.removeEventListener('scroll', run);
			window.removeEventListener('load', run);
			window.removeEventListener('resize', run);
		};
	}, []);

	const isInView = (item) => {
		const rect = item.getBoundingClientRect();
		return (
			rect.top + 100 >= 0 &&
			rect.left + 30 >= 0 &&
			rect.bottom - 100 <=
				(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right - 30 <=
				(window.innerWidth || document.documentElement.clientWidth)
		);
	};

	return (
		<div id='projects-line'>
			<ul
				data-aos='zoom-in-up'
				data-aos-duration='500'
				data-aos-easing='ease'
				data-aos-delay='250'
			>
				{projects.map((project, index) => {
					return <Project {...project} key={index} />;
				})}
			</ul>
			<div
				className='projects-coming-soon'
				data-aos='fade'
				data-aos-duration='500'
				data-aos-easing='ease'
				data-aos-delay='150'
				data-aos-offset='150'
			>
				<div />
				<div />
				<div />
				<a
					href='https://github.com/khoa165/All-my-projects'
					className='brand-dark-button btn-lg'
					rel='noopener noreferrer'
					target='_blank'
				>
					More projects on GitHub
				</a>
			</div>
		</div>
	);
};

export default Projects;
