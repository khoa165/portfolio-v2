import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import SchoolCard from './core/SchoolCard';
import { schools } from '../constants/education';
import '../styles/Education.scss';

const Education = () => {
	return (
		<Container>
			<Row>
				{schools.map((school, index) => {
					return (
						<Col lg='3' key={index}>
							<SchoolCard {...school} />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

export default Education;
