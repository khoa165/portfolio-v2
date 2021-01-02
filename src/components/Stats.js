import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { Row, Col } from 'reactstrap';
import '../styles/Stats.scss';

const stats = [
  {
    number: 50000,
    text: 'lines of code',
  },
  {
    number: 3000,
    text: 'hours of coding',
  },
  {
    number: 1500,
    text: 'github contributions',
  },
  {
    number: 50,
    text: 'github repositories',
  },
];

const Stats = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <div align='center'>
      <h3>
        I was never passionate about anything, <br />
        till 2 years ago, I learned to code.
      </h3>
      <Row>
        {stats.map((stat, index) => {
          return (
            <Col md='6' xl='3' className='count-up' key={index}>
              <CountUp
                start={viewPortEntered ? null : 0}
                end={stat.number}
                duration={5}
                separator={','}
                redraw={false}
              >
                {({ countUpRef }) => {
                  return (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <span ref={countUpRef} className='display-3' />
                    </VisibilitySensor>
                  );
                }}
              </CountUp>
              <p>{stat.text}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Stats;
