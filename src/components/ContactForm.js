import React from 'react';
import {Container, Form, FormGroup, Label, Input} from 'reactstrap';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/ContactForm.scss'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', message: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit() {
    const templateId = 'portfolio_template';
	  this.sendMessage(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.email})
  }
  sendMessage(templateId, variables) {
    window.emailjs.send('gmail', templateId, variables)
      .then(res => {
        if (res.status === 200) {
          this.notifySuccess('Your message was successfully sent. I will get back to you as soon as I get notified.');
        }
      })
      .catch(error => {
        let errorMessage = 'Unexpected error occurred. Please try again later!';
        if (error.text === 'The g-recaptcha-response parameter not found') {
          errorMessage = 'Please verify that you are not robot by checking the reCAPTCHA box!';
        } else if (error.text === 'timeout-or-duplicate') {
          errorMessage = 'It seems like your message was sent. Please avoid making duplicate submissions!'
        } else {
          console.log(error);
        }
        this.notifyErrors(errorMessage);
      }
    )
  }
  notifySuccess = success => {
    toast(success, {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.SUCCESS,
      autoClose: 8000
    });
  };
  notifyErrors = error => {
    toast(error, {
      position: toast.POSITION.TOP_RIGHT,
      type: toast.TYPE.ERROR,
      autoClose: 8000
    });
  };
  render() {
    return (
      <Container>
        <Form>
          <div id="fields-wrapper">
            <FormGroup>
              <Label for="contactFormNameField" className="form-label">Name</Label>
              <Input type="text" name="name" required
                id="contactFormNameField" 
                placeholder="How should I address you..."
                onChange={this.handleChange}
                value={this.state.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="contactFormEmailField" className="form-label">Email</Label>
              <Input type="email" name="email" required
                id="contactFormEmailField" 
                placeholder="Which email works best for you..."
                onChange={this.handleChange}
                value={this.state.email}
              />
            </FormGroup>
            <FormGroup>
              <Label for="contactFormMessageField" className="form-label">Message</Label>
              <Input type="textarea" name="message" rows="5" required
                id="contactFormMessageField"
                placeholder="What might we talk about..."
                onChange={this.handleChange}
                value={this.state.message}
              />
            </FormGroup>
            <div id="recaptcha-wrapper">
              <div className="g-recaptcha" data-sitekey="6LeHeMsUAAAAALWOkRTmh1ft2a7-QR4uguw6ImDz"></div>
            </div>
          </div>
          <div className="submit-button-wrapper">
            <input type="button" value="Submit" className="brand-dark-button" onClick={this.handleSubmit} />
          </div>
        </Form>
        
      </Container>
    )
  }
  
}
export default ContactForm;