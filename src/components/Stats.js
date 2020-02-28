import React from 'react';
import CountUp, { startAnimation } from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Row, Col } from 'reactstrap';
import '../styles/Stats.scss';

const stats = [
  {
    number: 35000,
    text: 'lines of code'
  },
  {
    number: 2500,
    text: 'hours of coding'
  },
  {
    number: 1000,
    text: 'github contributions'
  },
  {
    number: 50,
    text: 'github repositories'
  }
];

class Stats extends React.Component {
  render() {
    return (
      <Row>
        {stats.map((stat, index) => {
          return (
            <Col md='6' xl='3' className='count-up' key={index}>
              <CountUp
                start={0}
                end={stat.number}
                duration={5}
                separator={','}
                redraw={true}
              >
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} className='display-3' />
                  </VisibilitySensor>
                )}
              </CountUp>
              <p>{stat.text}</p>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Stats;
