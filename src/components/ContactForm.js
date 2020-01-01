import React from 'react';
import {Container, Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Form className="text-light text-left">
          <Row>
            <Col xs={{size: 10, offset: 1}} md={{size: 8, offset: 2}} lg={{size: 6, offset: 3}} xl={{size: 4, offset: 4}}>

              <FormGroup>
                <Label for="contactFormNameField">Name</Label>
                <Input type="text" name="name" required
                  id="contactFormNameField" 
                  placeholder="Please enter your name..."
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactFormEmailField">Email</Label>
                <Input type="email" name="email" required
                  id="contactFormEmailField" 
                  placeholder="Please enter your email..."
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </FormGroup>
              <FormGroup>
                <Label for="contactFormMessageField">Message</Label>
                <Input type="textarea" name="message" rows="5" required
                  id="contactFormMessageField"
                  placeholder="What might we talk about?"
                  onChange={this.handleChange}
                  value={this.state.message}
                />
              </FormGroup>
              <FormGroup>
                <div className="g-recaptcha" data-sitekey="6LeHeMsUAAAAALWOkRTmh1ft2a7-QR4uguw6ImDz"></div>
              </FormGroup>
              <div className="text-center">
                <input type="button" value="Submit" className="brand-dark-button" onClick={this.handleSubmit} />
              </div>
            </Col>
          </Row>
        </Form>
        
      </Container>
    )
  }
  
}
export default ContactForm;