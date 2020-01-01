import React from 'react';
import {Container, Row, Col, Card, CardTitle, CardText} from 'reactstrap';
import '../styles/Education.scss';

const schools = [
  {name: 'University of Wisconsin - Madison', color: "red-hexagon",
  degree: 'B.S. Computer Science', year: 'expected May 2022'},
  {name: 'Le Wagon Barcelona', color: "yellow-hexagon",
  degree: 'Full-Stack Web Development Bootcamp', year: 'Summer 2019'},
  {name: 'EF Academy New York', color: "blue-hexagon",
  degree: 'International Baccalaureate', year: '2016 - 2018'}
];

class School extends React.Component {
  render() {
    return (
      <Col lg="3">
        <Card body className={"education-card " + this.props.color}>
          <div className={"hexagon " + this.props.color}/>
          <CardTitle>{this.props.name}</CardTitle>
          <CardText className="school-degree">{this.props.degree}</CardText>
          <CardText className="school-year">{this.props.year}</CardText>
        </Card>
      </Col>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {schools.map((school, index) => {
            return <School {...school} key={index} />
          })}
        </Row>
      </Container>
    );
  }
}

export default Education 