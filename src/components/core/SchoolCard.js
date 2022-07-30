import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import '../../styles/Education.scss';

const SchoolCard = ({ color, degree, year, name }) => {
	return (
		<Card body className={'education-card ' + color}>
			<div className={'hexagon ' + color} />
			<CardTitle>{name}</CardTitle>
			<CardText className='school-degree'>{degree}</CardText>
			<CardText className='school-year'>{year}</CardText>
		</Card>
	);
};

export default SchoolCard;
