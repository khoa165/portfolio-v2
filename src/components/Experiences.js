import React from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import { Container, Button } from 'reactstrap';
import Experience from './Experience';
import '../styles/Experiences.scss';

const upcomingExperience = {
  title: 'Incoming Software Engineering Intern',
  location: 'Adobe Inc.',
  date: 'May 2021 - Aug 2021',
  summary: 'Will be updated once the internship starts.',
  contributions: [],
  projects: [],
  skills: [],
};

const mainExperience = {
  title: 'Student Web Developer',
  location: 'UW-Madison',
  date: 'October 2019 - December 2020',
  summary:
    'Provided more than 50 hours technical support to the Department of Medical Physics.',
  contributions: [
    'Designing, implementing and maintaining source code.',
    'Modifying, updating and improving the existing department website, content and application.',
    'Building new web pages and internal applications using PHP, MySQL and WordPress that serve around 250 students, faculties, and staffs of the Department of Medical Physics.',
  ],
  projects: [
    'Contact form with verification using jQuery, dynamic data handling using AJAX, bots-prevention with Google Recaptcha API, dashboard view with intuitive interface for administrative staffs to easily manage the submissions.',
    'Internal nomination system with multiple files upload, verification using jQuery, dynamic data handling using AJAX for Department faculties to nominate pre-doctoral students for research support and dashboard view for administrative staffs.',
    'Currently working and learning on how to create Wordpress Plugins for the purpose of code sharing and reusability.',
  ],
  skills: [
    'Working knowledge of PHP, MySQL, WordPress, HTML, CSS, JavaScript.',
    'Ability to pick up new language and new development stack quickly.',
    'Effective writing and communication skills.',
    'Attention to detail, well organized.',
    'Punctuality, reliable attendance, and flexibility.',
    'Excellent time management skills.',
    'Ability to work in a fast-paced, time-sensitive team environment.',
    'Exceptional interpersonal skills and the ability to work with diverse populations.',
  ],
};

const extraExperiences = [
  {
    title: 'Residence Hall Math Tutor',
    location: 'UW-Madison',
    date: 'September 2019 - now',
    summary:
      'Facilitating weekly individual and group tutoring to university housing residents taking Mathematics courses through Math 222 (Calculus II).',
    contributions: [
      'Helping students make academic progress, while at the same time promoting independent learning, problem solving skills, and self-reliance.',
      'Working one-on-one or in small groups to help university housing residents gain confidence in their math skills.',
      'Collaborating with Residence Life staff to promote and provide feedback regarding the hall math tutoring program.',
      'Answering questions and/or explained general concepts to aid students in their overall comprehension of the course material, without giving away the answers.',
    ],
    skills: [
      'Ability to provide individual or small group tutoring sessions.',
      'Ability to engage students in a discussion of the course content.',
      "Ability to identify and successfully adapt to different students' learning styles.",
      'Possess excellent communication skills, problem solving skills, and the ability to work with a diverse student body.',
      'Ability to work independently.',
    ],
  },
  {
    title: 'Culinary Student Team Member',
    location: 'UW-Madison',
    date: 'August 2019 - May 2019',
    summary:
      'Provided more than 250 hours of exceptional customer service with the goal of making guests feel welcome and satisfied.',
    contributions: [
      'Communicated effectively with other coworkers and supervisors.',
      'Worked with other students and professional staff to learn kitchen and food prep techniques.',
      'Provided a welcoming, respectful and efficient food service experience to customers.',
      'Operated cash register/POS system.',
      'Washed dishes and maintain a clean and inviting dining area.',
      'Served hot and cold menu items; grill; stock and inventory food and supplies.',
    ],
    skills: [
      'Ability to work collaboratively and independently.',
      'Strong commitment and communication skills.',
      'Attention to detail and organization.',
      'Ability to creatively solve problems.',
    ],
  },
];

class Experiences extends React.Component {
  state = { expandMoreExperience: false };
  toggle = () =>
    this.setState({ expandMoreExperience: !this.state.expandMoreExperience });
  goToExperiencesAndToggle = (e) => {
    e.preventDefault();
    const experiences = document.querySelector('#experiences');
    scrollIntoView(experiences, {
      scrollMode: 'if-needed',
      block: 'start',
      inline: 'nearest',
      duration: window.innerWidth > 499 ? 100 : 1500,
      ease: (t) =>
        t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,
    });
    this.toggle();
  };
  render() {
    return (
      <Container>
        <Experience {...upcomingExperience} />
        <Experience {...mainExperience} />
        {!this.state.expandMoreExperience ? (
          <p className='see-more-statement'>
            If you are not bored yet,
            <Button size='sm' onClick={() => this.toggle()}>
              Expand
            </Button>
            to learn more about my other experiences.
          </p>
        ) : null}
        {this.state.expandMoreExperience
          ? extraExperiences.map((experience, index) => {
              return <Experience {...experience} key={index} />;
            })
          : null}
        {this.state.expandMoreExperience ? (
          <a href='#experiences' onClick={this.goToExperiencesAndToggle}>
            See less
          </a>
        ) : null}
      </Container>
    );
  }
}

export default Experiences;
