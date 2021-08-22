import React from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/Skills.scss';

const Skill = ({ url, details, customClass, size }) => {
	return (
		<Col xs='6' lg={size} className='skill-icon'>
			<img src={url} alt={details} className={customClass} />
			<span className='skill-details'>{details}</span>
		</Col>
	);
};

const SkillGroup = ({ skills, name, size }) => {
	return (
		<div className='skill-group'>
			<p className='skill-group-title'>{name}</p>
			<Row>
				{skills.map((skill, index) => {
					return <Skill {...skill} size={size} key={index} />;
				})}
			</Row>
		</div>
	);
};

export default SkillGroup;
