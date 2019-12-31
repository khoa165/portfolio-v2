import React from 'react';
import '../styles/Projects.scss';

class Project extends React.Component {
  render() {
    return (
      <li>
        <div className="project-card">
          <h3>{this.props.title}</h3>
          <div className="project-description">
            {this.props.descriptions.map((description, index) => {
              return <p key={index}>{description}</p>
            })}
          </div>
          <div className="project-details">
            <img alt={this.props.title} className="ui image" src={this.props.image} />
            <div className="project-tools">
              {this.props.skills.map((skill, index) => {
                return <span key={index}>{skill}</span> 
              })}
            </div>
          </div>
          <div className="project-buttons">
            {this.props.demo ?
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={this.props.demo}
                className="project-button">
                Demo
              </a>
            : null}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/nchulani2/yelpcamp"
              className="project-button">
                Source
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default Project;