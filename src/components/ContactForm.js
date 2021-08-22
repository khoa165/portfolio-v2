import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ContactForm.scss';

const ContactForm = () => {
	const [data, setData] = useState({ name: '', email: '', message: '' });
	const { name, email, message } = data;
	const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
		const templateId = 'portfolio_template';
		sendMessage(templateId, {
			message_html: message,
			from_name: name,
			reply_to: email,
		});
	};

	const sendMessage = (templateId, variables) => {
		emailjs
			.send('gmail', templateId, variables)
			.then((res) => {
				if (res.status === 200) {
					toast.success(
						'Your message was successfully sent. I will get back to you as soon as I get notified.'
					);
				}
			})
			.catch((error) => {
				if (error.text === 'The g-recaptcha-response parameter not found') {
					toast.error(
						'Please verify that you are not robot by checking the reCAPTCHA box!'
					);
				} else if (error.text === 'timeout-or-duplicate') {
					toast.error(
						'It seems like your message was sent. Please avoid making duplicate submissions!'
					);
				} else {
					toast.error('Unexpected error occurred. Please try again later!');
					console.log(error);
				}
			});
	};

	return (
		<Container>
			<Form>
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
							<div
								className='g-recaptcha'
								data-sitekey='6LeHeMsUAAAAALWOkRTmh1ft2a7-QR4uguw6ImDz'
							></div>
						</div>
						<div className='submit-button-wrapper'>
							<button
								type='submit'
								className='brand-dark-button'
								onClick={onSubmit}
							>
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
