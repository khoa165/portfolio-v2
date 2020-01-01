import React from "react";
import {Container} from 'reactstrap';
import '../styles/Resume.scss';
import resume from '../resume/Resume_KhoaThienLe.pdf'

class Resume extends React.Component {
  render() {
    return (
      <div>
        <div className="resume-download">
          <a href={resume} className="brand-dark-button btn-lg" rel="noopener noreferrer" target="_blank">Download</a>
        </div>
        <Container className="resume-wrapper">
          <iframe
            className="iframer"
            title="resume"
            type="application/pdf"
            src={resume}
          />
        </Container>
      </div>
    );
  }
}
 
export default Resume;