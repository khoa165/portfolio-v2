import React from 'react';
import Project from './Project';
import '../styles/Projects.scss';

const projects = [
  {
    title: 'Power U',
    image:
      'https://res.cloudinary.com/khoa165/image/upload/q_100/v1582446172/portfolio/productivity.svg',
    descriptions: [
      'Develop API endpoints using Node.js, Express.js, and MongoDB to build an app for productivity. Upcoming features include profile builder, task manager, and task list sharing and collaboration.',
      'Authenticate routes with JSON Web Token, validate with Express-validator middleware, and conduct testing with Postman.',
      'Implement user interface with React and manage application with Redux.'
    ],
    skills: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'API development',
      'JWT authentication',
      'Express-validator',
      'Postman testing',
      'React',
      'Reactstrap',
      'Redux'
    ]
  },
  {
    title: 'BuddE Network',
    image:
      'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577895922/portfolio/friends.svg',
    descriptions: [
      'Built a social network visualization that allows creating/removing users, adding/removing friendship between users, navigating through the network from the view of each user.',
      'Led a team of four to complete a decent final class project. Facilitated coding sessions to build prototype with Lucidchart and assist others with desiging, implementing and debugging the program.',
      'Set up, configured, and structured the project. Managed the coding progress throughout three weeks span. Implemented interfaces, graph data structure and the majority of front end.'
    ],
    skills: [
      'Back-end with Java',
      'Front-end with JavaFX',
      'Graph data structure'
    ],
    source: 'https://github.com/khoa165/BuddENetwork'
  },
  {
    title: 'Buddy Up',
    image:
      'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577895922/portfolio/buddies.svg',
    descriptions: [
      'Built a minimum viable product using Ruby on Rails and PostgreSQL that connects people with similar interests, focusing on 1-on-1 buddy networking and using a criteria-weighted score system to process user data.',
      'Pitched idea and convinced others to join team. Led a team of four students using GitHub for collaboration and adopting Agile methodology to achieve an efficient 2-week sprint: daily standup and in-person interactions, Trello board for user stories/features-oriented, and flexible course of actions to ensure working software.'
    ],
    skills: [
      'Ruby on Rails',
      'PostgreSQL',
      'HTML | CSS | JS',
      'Heroku',
      'GitHub',
      'Bootstrap',
      'jQuery',
      'Cloudinary',
      'Devise authentication',
      'Geocoding',
      'PredictHQ API',
      'Figma'
    ],
    demo: 'https://www.buddyup.xyz/',
    source: 'https://github.com/khoa165/buddyUp'
  },
  {
    title: 'Pet Now',
    image:
      'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577895922/portfolio/pet.svg',
    descriptions: [
      'Built a minimum viable product using Ruby on Rails and PostgreSQL that connects pet lovers and those who might be in need of having others take care of their pets.',
      'Pitched idea and convinced others to join team. Led a team of four students using GitHub for collaboration and adopting Agile methodology to achieve an efficient 1-week sprint: daily standup and in-person interactions, and flexible course of actions to ensure working software.'
    ],
    skills: [
      'Ruby on Rails',
      'PostgreSQL',
      'HTML | CSS | JS',
      'Heroku',
      'GitHub',
      'Bootstrap',
      'jQuery',
      'Cloudinary',
      'Devise authentication',
      'Geocoding',
      'Mapbox API',
      'Figma'
    ],
    demo: 'https://petnow.herokuapp.com/',
    source: 'https://github.com/khoa165/petNow'
  },
  {
    title: 'Fish Evolution',
    image:
      'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577895922/portfolio/shark.svg',
    descriptions: [
      'Built a classic game of big fish capturing smaller fish to evolve using Java and Processing graphic library',
      'Practiced Object-oriented programming concepts and project design.'
    ],
    skills: ['Back-end with Java', 'Front-end with Processing'],
    source: 'https://github.com/khoa165/fish-evolution'
  }
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
      <div id='projects-line'>
        <ul
          data-aos='zoom-in-up'
          data-aos-duration='500'
          data-aos-easing='ease'
          data-aos-delay='250'
        >
          {projects.map((project, index) => {
            return <Project {...project} key={index} />;
          })}
        </ul>
        <div
          className='projects-coming-soon'
          data-aos='fade'
          data-aos-duration='500'
          data-aos-easing='ease'
          data-aos-delay='150'
          data-aos-offset='150'
        >
          <div />
          <div />
          <div />
          <a
            href='https://github.com/khoa165/All-my-projects'
            className='brand-dark-button btn-lg'
            rel='noopener noreferrer'
            target='_blank'
          >
            More projects on GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
