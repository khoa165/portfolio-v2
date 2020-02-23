import React from 'react';
import '../styles/Projects.scss';

class Project extends React.Component {
  render() {
    return (
      <li>
        <div className='project-card'>
          <h3>{this.props.title}</h3>
          <div className='project-description'>
            <img
              alt={this.props.title}
              className='ui image'
              src={this.props.image}
            />
            {this.props.descriptions.map((description, index) => {
              return <p key={index}>{description}</p>;
            })}
          </div>
          <div className='project-tools'>
            {this.props.skills.map((skill, index) => {
              return <span key={index}>{skill}</span>;
            })}
          </div>
          <div className='project-buttons'>
            {this.props.demo ? (
              <a
                rel='noopener noreferrer'
                target='_blank'
                href={this.props.demo}
                className='project-button'
              >
                Demo
              </a>
            ) : null}
            {this.props.source ? (
              <a
                rel='noopener noreferrer'
                target='_blank'
                href={this.props.source}
                className='project-button'
              >
                Source
              </a>
            ) : null}
          </div>
        </div>
      </li>
    );
  }
}

export default Project;
