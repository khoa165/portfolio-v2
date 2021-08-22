import React from 'react';
import { Container } from 'reactstrap';
import SkillGroup from './SkillGroup';
import { skillGroups } from '../constants/skills';
import '../styles/Skills.scss';

class Skills extends React.Component {
	render() {
		return (
			<Container>
				<div id='skills-wrapper'>
					{skillGroups.map((group, index) => {
						return <SkillGroup {...group} key={index} />;
					})}
				</div>
			</Container>
		);
	}
}

export default Skills;
