import React from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import { Container, Row, Col, Button } from 'reactstrap';
import '../styles/About.scss';

const mainBio = [
  'I am a rising senior at the University of Wisconsin at Madison pursuing Computer Science and Data Science majors. I am currently looking for internship and/or co-op opportunities in software development for 2021 & 2022.',
  'Throughout a variety of work, group and individual class and personal projects, I gained experience working with MERN stack (MongoDB, Expres.js, React.js, Node.js), Java, Python, PHP, Ruby (and Rails), SQL,Android.',
  'During my time as a college student, I have been taking challenging computer science coursework that strengthens my programming development as well as data structures and algorithms skills.',
];

const additionalBio = [
  'During my first semester in college, I enrolled in an introductory course of programming. I recall myself struggling to understand basic concepts such as methods and data types. Weekly programming was indeed a huge challenge for me as I was not able to apply what I learned into practice. Aware of that, I started taking a more proactive approach in learning and I visited Professors’ office hours weekly to ensure I fully understood every concept I learned in class. By the end of the course, I realized I enjoyed coding more than I expected, especially working through the big program assignments. I coded a classic game of Sokoban and built a simple chat bot with instructions from the Professors.',
  'I recall spending the winter break after that researching more about the opportunities and career paths that Computer Science major offers. Set on becoming a software developer in the future, I went on to take the second course in the programming sequence. During the weekend, I took what I learned from class projects to another level and spent time coding small silly games using Java and Processing graphic library. I took advantages of Spring break to work on personal projects as well as learning new technological tools, starting with HTML and CSS.',
  'I grew up pursuing the education in Vietnam, where I tried to study all 12 subjects equally well and ended up feeling lost about my career path and my future. I applied to college as Mechanical Engineering major just like other typical STEM-oriented students. Everything changes after I realized coding was truly my first passion. While I craved for more knowledge, I did realize my learning process was slow and lacked of focus. That was when I decided to jumpstart my technical skillset with a summer bootcamp.',
  'Since I did study a little Spanish in high school and college, I decided to attend a 9-week Full-Stack Web Development Bootcamp in Barcelona, Spain to explore the culture as well. I learned Ruby on Rails and PostgreSQL stack and led a team of four to build a website named Buddy Up that matches people based on personalities and interests on a 1-on-1 basis. While I was the youngest of the batch, I demonstrated maturity, great adaptation in new environment and leadership in team projects. The experience was beyond amazing and it was indeed the catalyst I need for my quest of conquering software development world.',
  'Having a sharp understanding of how the web works and how different components like server, database and various front-end tools connect to each other, I started applying for a lot of different student developer positions, hoping to gain working experience. Fortunately, I got an offer and started working as Student Web and Application Developer for the Department of Medical Physics. While I was the youngest applicant with no prior knowledge of PHP and MySQL, my enthusiasm for coding as well as my soft skills probably helped me get the job. I demonstrated my quick learning of new development stack through learning PHP, MySQL and WordPress on the go.',
];

const lastParaBio =
  'As I challenge myself everyday to learn and grow more, I aim to leverage my skills to good use and build products that serve the communities around me. I am constantly learning new things to fulfill my dream of becoming a software developer in a near future.';

class About extends React.Component {
  state = { expandMoreInfo: false };
  toggle = () => this.setState({ expandMoreInfo: !this.state.expandMoreInfo });
  goToAboutAndToggle = (e) => {
    e.preventDefault();
    const about = document.querySelector('#about');
    scrollIntoView(about, {
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
      <div>
        <Container>
          <Row className='align-items-start'>
            <Col xs='12' lg='7' className='info order-2 order-lg-1'>
              {mainBio.map((text) => (
                <p>{text}</p>
              ))}
              {!this.state.expandMoreInfo ? (
                <p className='see-more-statement'>
                  If you are not bored yet,
                  <Button size='sm' onClick={this.toggle}>
                    Expand
                  </Button>
                  to read more about my coding journey.
                </p>
              ) : null}
            </Col>
            <Col lg='4' className='profile-pic order-1 order-lg-2'>
              <img
                src='https://res.cloudinary.com/khoa165/image/upload/q_100/v1577895922/portfolio/avatar.jpg'
                alt='My avatar'
                className='avatar'
              />
            </Col>
          </Row>
          <div className='extra-info'>
            {this.state.expandMoreInfo ? (
              <div>
                {additionalBio.map((text) => (
                  <p>{text}</p>
                ))}
                <p>
                  {lastParaBio}
                  <a href='#about' onClick={this.goToAboutAndToggle}>
                    See less
                  </a>
                </p>
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
