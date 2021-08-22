import React from 'react';
import '../styles/Projects.scss';

const Project = ({
	title,
	image,
	note,
	descriptions,
	skills,
	demo,
	source,
}) => {
	return (
		<li>
			<div className='project-card'>
				<h3>{title}</h3>
				<div className='project-description'>
					<img alt={title} className='ui image' src={image} />
					{note ? <p className='font-weight-bold'>#{note}</p> : null}
					{descriptions.map((description, index) => {
						return <p key={index}>{description}</p>;
					})}
				</div>
				<div className='project-tools'>
					{skills.map((skill, index) => {
						return <span key={index}>{skill}</span>;
					})}
				</div>
				<div className='project-buttons'>
					{demo && (
						<a
							rel='noopener noreferrer'
							target='_blank'
							href={demo}
							className='project-button'
						>
							Demo
						</a>
					)}
					{source && (
						<a
							rel='noopener noreferrer'
							target='_blank'
							href={source}
							className='project-button'
						>
							Source
						</a>
					)}
				</div>
			</div>
		</li>
	);
};

export default Project;
