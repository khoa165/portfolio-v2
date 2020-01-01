import React from 'react';
import {Row, Col} from 'reactstrap';
import '../styles/Skills.scss';

class Skill extends React.Component {
  render() {
    return (
      <Col xs="6" lg="3" className="skill-icon">
        <img src={this.props.url} alt={this.props.details} className={this.props.class} />
        <span className="skill-details">{this.props.details}</span>
      </Col>
    );
  }
}

class SkillGroup extends React.Component {
  render() {
    return (
      <div className="skill-group">
        <p className="skill-group-title">{this.props.name}</p>
        <Row>
          {this.props.skills.map((skill, index) => {
            return <Skill {...skill} key={index} />
          })}
        </Row>
      </div>
    );
  }
}

export default SkillGroup;