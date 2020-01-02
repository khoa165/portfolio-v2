import React from 'react';
import {Container} from 'reactstrap';
import SkillGroup from './SkillGroup';
import '../styles/Skills.scss';

const frontendSkills = [
  {details: 'React: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577859006/portfolio/react.svg'},
  {details: 'HTML: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845510/portfolio/html.svg'},
  {details: 'CSS: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845510/portfolio/css.svg'},
  {details: 'JavaScript: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845512/portfolio/javascript.svg'},
  {details: 'Bootstrap: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577848326/portfolio/bootstrap.svg'},
  {details: 'Semantic UI: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577858595/portfolio/semanticui.svg'},
  {details: 'jQuery: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1578004777/portfolio/jquery.svg'},
  {details: 'Sass: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577861494/portfolio/sass_miliqh.svg'}
];
const backendSkills = [
  {details: 'Ruby on Rails: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577857737/portfolio/rubyonrails.svg'},
  {details: 'Node.js: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577848328/portfolio/nodejs.svg'},
  {details: 'Express.js: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577860240/portfolio/expressjs.svg', class: 'bg-light'},
  {details: 'PHP: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577848328/portfolio/php.svg'}
];
const databaseSkills = [
  {details: 'PostgreSQL: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845513/portfolio/postgresql.svg'},
  {details: 'MongoDB: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845512/portfolio/mongodb.svg'},
  {details: 'MySQL: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577848326/portfolio/mysql.svg'},
  {details: 'SQLite: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,w_100/v1577846578/portfolio/sqlite.svg'}
];
const programmingSkills = [
  {details: 'Java: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845510/portfolio/java.svg'},
  {details: 'Ruby: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845513/portfolio/ruby.svg'},
  {details: 'C++: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845510/portfolio/c%2B%2B.svg'},
  {details: 'C Programming: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577846314/portfolio/c.svg'}
];
const toolSkills = [
  {details: 'SQL: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577848328/portfolio/sql.svg'},
  {details: 'JSON: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577848326/portfolio/json.svg'},
  {details: 'API: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577848326/portfolio/api.svg'},
  {details: 'Terminal: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577897059/portfolio/terminal.svg'},
  {details: 'Git: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845510/portfolio/git.svg'},
  {details: 'GitHub: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845510/portfolio/github.svg'},
  {details: 'Ruby Gems: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845513/portfolio/rubygem.svg'},
  {details: 'NPM: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577845512/portfolio/npm.svg'},
  {details: 'Yarn: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577858381/portfolio/yarn.svg'},
  {details: 'Webpackt: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/q_100/v1577848330/portfolio/webpack.svg'},
  {details: 'Heroku: familiar', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577848326/portfolio/heroku.svg'},
  {details: 'Ubuntu: proficient', url: 'https://res.cloudinary.com/khoa165/image/upload/c_scale,h_100,q_100/v1577848330/portfolio/ubuntu.svg'}
];
const skillGroups = [
  {name: 'Front End', skills: frontendSkills},
  {name: 'Back End', skills: backendSkills},
  {name: 'Database', skills: databaseSkills},
  {name: 'Programming', skills: programmingSkills},
  {name: 'Other Tools', skills: toolSkills}
];

class Skills extends React.Component {
  render() {
    return (
      <Container>
        <div id="skills-wrapper">
          {skillGroups.map((group, index) => {
            return <SkillGroup {...group} key={index} />
          })}
        </div>
      </Container>
    );
  }
}

export default Skills;