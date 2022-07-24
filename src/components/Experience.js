import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/Experiences.scss';

const Experience = ({
	title,
	location,
	date,
	summary,
	contributions,
	projects,
	skills,
	visible,
}) => {
	return (
		visible && (
			<div className='experience-card'>
				<Row>
					<Col xs='12' lg='3' className='experience-info'>
						<p className='experience-title'>{title}</p>
						<p className='experience-location'>{location}</p>
						<p className='experience-date'>{date}</p>
					</Col>
					<Col xs='12' lg='8' className='experience-details'>
						{summary && <p className='experience-summary'>{summary}</p>}

						{contributions && (
							<Fragment>
								<p className='bold'>Key contributions:</p>
								<ul>
									{contributions.map((contribution, index) => {
										return <li key={index}>{contribution}</li>;
									})}
								</ul>
							</Fragment>
						)}
						{projects && (
							<Fragment>
								<p className='bold'>Projects so far:</p>
								<ul>
									{projects.map((project, index) => {
										return <li key={index}>{project}</li>;
									})}
								</ul>
							</Fragment>
						)}
						{skills && (
							<Fragment>
								<p className='bold'>Knowledge/Skills:</p>
								<ul>
									{skills.map((skill, index) => {
										return <li key={index}>{skill}</li>;
									})}
								</ul>
							</Fragment>
						)}
					</Col>
				</Row>
			</div>
		)
	);
};

export default Experience;
