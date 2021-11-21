import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import '../styles/Resume.scss';

const Resume = () => {
	return (
		<Fragment>
			<div className='resume-download'>
				<a
					href='https://drive.google.com/file/d/1WS4FdYyi2Phb4FQB1f9pZ4bwY2rjOQ5B/view?usp=sharing'
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
					src='https://drive.google.com/file/d/1WS4FdYyi2Phb4FQB1f9pZ4bwY2rjOQ5B/preview'
				/>
			</Container>
		</Fragment>
	);
};

export default Resume;
