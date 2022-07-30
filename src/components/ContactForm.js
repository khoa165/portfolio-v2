import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ContactForm.scss';

const ContactForm = () => {
	const [data, setData] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = data;
	const captchaRef = useRef(null);

	const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		sendMessage({
			message: message,
			from_name: name,
			reply_to: email,
			'g-recaptcha-response': captchaRef.current.getValue(),
		});
	};

	const sendMessage = (variables) => {
		const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
		const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
		const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
		emailjs
			.send(serviceId, templateId, variables, publicKey)
			.then((res) => {
				if (res.status === 200) {
					toast.success(
						'Your message was successfully sent. I will get back to you as soon as I get notified.'
					);
				}
			})
			.catch((error) => {
				if (
					error.text ===
					'reCAPTCHA: The g-recaptcha-response parameter not found'
				) {
					toast.error(
						'Please verify that you are not robot by checking the reCAPTCHA box!'
					);
				} else if (error.text === 'reCAPTCHA: timeout-or-duplicate') {
					toast.error(
						'Either your reCAPTCHA token timed out or you are making duplicate submission! Please reload page and try again!'
					);
				} else {
					toast.error('Unexpected error occurred. Please try again later!');
					console.log(error);
				}
			});
	};

	return (
		<Container>
			<Form onSubmit={onSubmit}>
				<div id='form-wrapper'>
					<p className='contact-statement'>
						You can reach me at <span>ktle4@wisc.edu</span> or fill in the form
						below. I will try to respond withing 48 hours.
					</p>
					<div id='fields-wrapper'>
						<FormGroup>
							<Label for='contactFormNameField' className='form-label'>
								Name
							</Label>
							<Input
								type='text'
								name='name'
								required
								id='contactFormNameField'
								placeholder='How should I address you...'
								onChange={onChange}
								value={name}
							/>
						</FormGroup>
						<FormGroup>
							<Label for='contactFormEmailField' className='form-label'>
								Email
							</Label>
							<Input
								type='email'
								name='email'
								required
								id='contactFormEmailField'
								placeholder='Which email works best for you...'
								onChange={onChange}
								value={email}
							/>
						</FormGroup>
						<FormGroup>
							<Label for='contactFormMessageField' className='form-label'>
								Message
							</Label>
							<Input
								type='textarea'
								name='message'
								rows='5'
								required
								id='contactFormMessageField'
								placeholder='What might we talk about...'
								onChange={onChange}
								value={message}
							/>
						</FormGroup>
						<div id='recaptcha-wrapper'>
							<ReCAPTCHA
								className='g-recaptcha'
								sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
								ref={captchaRef}
							/>
						</div>
						<div className='submit-button-wrapper'>
							<button type='submit' className='brand-dark-button'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</Form>
		</Container>
	);
};
export default ContactForm;
