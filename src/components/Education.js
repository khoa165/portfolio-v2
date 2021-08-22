import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardText } from 'reactstrap';
import { schools } from '../constants/education';
import '../styles/Education.scss';

const School = ({ color, degree, year, name }) => {
	return (
		<Col lg='3'>
			<Card body className={'education-card ' + color}>
				<div className={'hexagon ' + color} />
				<CardTitle>{name}</CardTitle>
				<CardText className='school-degree'>{degree}</CardText>
				<CardText className='school-year'>{year}</CardText>
			</Card>
		</Col>
	);
};

const Education = () => {
	return (
		<Container>
			<Row>
				{schools.map((school, index) => {
					return <School {...school} key={index} />;
				})}
			</Row>
		</Container>
	);
};

export default Education;
