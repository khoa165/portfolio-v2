import React from "react";
import Project from './Project';
import '../styles/Projects.scss';

import friendsImage from '../images/friends.svg';
import buddiesImage from '../images/buddies.svg';
import petImage from '../images/pet.svg';
import sharkImage from '../images/shark.svg';
import '../styles/Projects.scss';

const projects = [
  {title: 'BuddE Network', image: `${friendsImage}`,
  descriptions: [
    'Mini social network that allows creating/removing users, adding/removing friendship between users, navigating through the network from the view of each user.',
    'Led a team of four to complete a decent final class project. Facilitated coding sessions to build prototype with Lucidchart and assist others with desiging, implementing and debugging the program.',
    'Set up, configured, and structured the project. Managed the coding progress throughout three weeks span. Implemented interfaces, graph data structure and the majority of front end.'
  ],
  skills: ['Back-end with Java', 'Front-end with JavaFX', "Graph data structure"],
  source: "https://github.com/khoa165/BuddENetwork"},
  {title: 'Buddy Up', image: `${buddiesImage}`,
  descriptions: [
    'MVP platform to connect people with similar interests, focus on 1-on-1 buddy networking.',
    'Pitched idea and convinced others to join team. Led a team of four with proficient workflow through GitHub collaboration platform. Split user stories across team members, built intuitive UX/UI.'
  ],
  skills: ['Ruby on Rails', 'PostgreSQL', 'HTML | CSS | JS', 'Heroku', 'GitHub', 'Bootstrap', 'jQuery', 'Cloudinary', 'Devise authentication', 'Geocoding', 'PredictHQ API', 'Figma'],
  demo: "https://www.buddyup.xyz/",
  source: "https://github.com/khoa165/buddyUp"},
  {title: 'Fish Evolution', image: `${sharkImage}`,
  descriptions: [
    'Classic game of big fish capturing smaller fish.',
    'Practiced Object-oriented programming (OOP) concepts and Data Structures and Algorithms (DSA).'
  ],
  skills: ['Back-end with Java', 'Front-end with Processing'],
  source: "https://github.com/khoa165/fish-evolution"},
  {title: 'Pet Now', image: `${petImage}`,
  descriptions: [
    'MVP platform to allow pet lover to rent pet for a short amount of time.',
    'Pitched idea and convinced others to join team. Led a team of four with proficient workflow through GitHub collaboration platform. Split user stories across team members, built intuitive UX/UI.'
  ],
  skills: ['Ruby on Rails', 'PostgreSQL', 'HTML | CSS | JS', 'Heroku', 'GitHub', 'Bootstrap', 'jQuery', 'Cloudinary', 'Devise authentication', 'Geocoding', 'Mapbox API', 'Figma'], 
  demo: "https://petnow.herokuapp.com/",
  source: "https://github.com/khoa165/petNow"}
  
];
 
class Projects extends React.Component {
  componentDidMount = () => {
    window.addEventListener('load', this.run);
    window.addEventListener('resize', this.run);
    window.addEventListener('scroll', this.run);
  };

  run = () => {
    const items = document.querySelectorAll('#projects-line li');
    items.forEach(item => {
      if (this.isInView(item)) {
        item.classList.add('show');
      }
    });
  };

  isInView = item => {
    const rect = item.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  render() {
    return (
      <div id="projects-line">
        <ul
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="250">
          {projects.map((project, index) => {
            return <Project {...project} key={index} />
          })}
        </ul>
        <div
          className="projects-coming-soon"
          data-aos="fade"
          data-aos-duration="500"
          data-aos-easing="ease"
          data-aos-delay="150"
          data-aos-offset="150">
          <div />
          <div />
          <div />
          <a href="https://github.com/khoa165" className="github-button btn-lg" rel="noopener noreferrer" target="_blank">More projects on GitHub</a>
        </div>
      </div>
    )
  }
}

export default Projects;