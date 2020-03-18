import React, { Fragment } from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/Experiences.scss';

class Experience extends React.Component {
  render() {
    return (
      <div className='experience-card'>
        <Row>
          <Col xs='11' lg='3' className='experience-info'>
            <p className='experience-title'>{this.props.title}</p>
            <p className='experience-location'>{this.props.location}</p>
            <p className='experience-date'>{this.props.date}</p>
          </Col>
          <Col xs='11' md='12' lg='8' className='experience-details'>
            {this.props.summary ? (
              <p className='experience-summary'>{this.props.summary}</p>
            ) : null}

            {this.props.contributions ? (
              <Fragment>
                <p className='bold'>Key contributions:</p>
                <ul>
                  {this.props.contributions.map((contribution, index) => {
                    return <li key={index}>{contribution}</li>;
                  })}
                </ul>
              </Fragment>
            ) : null}

            {this.props.projects ? (
              <p className='bold'>Projects so far:</p>
            ) : null}
            {this.props.projects ? (
              <ul>
                {this.props.projects.map((project, index) => {
                  return <li key={index}>{project}</li>;
                })}
              </ul>
            ) : null}

            {this.props.skills ? (
              <Fragment>
                <p className='bold'>Knowledge/Skills:</p>
                <ul>
                  {this.props.skills.map((skill, index) => {
                    return <li key={index}>{skill}</li>;
                  })}
                </ul>
              </Fragment>
            ) : null}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Experience;
