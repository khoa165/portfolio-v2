import React from 'react';
import { Container } from 'reactstrap';
import '../styles/Resume.scss';

class Resume extends React.Component {
  render() {
    return (
      <div>
        <div className='resume-download'>
          <a
            href='https://drive.google.com/file/d/1eILkpjxZ5O0UBW3LvSot0ZKRDSem0Xqw/view?usp=sharing'
            className='brand-dark-button btn-lg'
            rel='noopener noreferrer'
            target='_blank'
          >
            Download
          </a>
        </div>
        <Container className='resume-wrapper'>
          <iframe
            className='iframer'
            title='resume'
            type='application/pdf'
            src='https://drive.google.com/file/d/1eILkpjxZ5O0UBW3LvSot0ZKRDSem0Xqw/preview'
          />
        </Container>
      </div>
    );
  }
}

export default Resume;
