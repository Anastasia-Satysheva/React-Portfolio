import React, { Component, Fragment } from 'react';

import './Contact.css';
import axios from '../../axios-orders';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
	state = {
		name: '',
		email: '',
		msg: '',
		submitted: false
	}
	
	postForm = (event) => {
		event.preventDefault();
	
		const data = {
			name: this.state.name,
			email: this.state.email,
			msg: this.state.msg
		}

		axios.post('/contact.json', data)
			.then(response => {
				console.log(response);
				this.setState({submitted: true});
			})
			.catch(err => {
				console.log(err);
			});
	}

	inputChangedHandler = (event, inputIdentifier) => {
        const updatedState = { ...this.state };
        updatedState[inputIdentifier] = event.target.value;
        this.setState(updatedState);
    }

	render() {
		return (
			<Fragment>
				{this.state.submitted ? <Redirect to="/"/> : null}
				<h1>Contact</h1>
				<hr className="hr__content" />
				<form className="contact-form standard-text" onSubmit={this.postForm}>
					<div>
						<label htmlFor="name">Name</label>
						<input type="text" id ="name" name="user_name" placeholder="John Smith" value={this.state.name} onChange={(event) => this.inputChangedHandler(event, 'name')} />
					</div>
					<div>
						<label htmlFor="mail">Email</label>
						<input type="email" id="mail" name="user_mail" placeholder="example@gmail.com" value={this.state.email} onChange={(event) => this.inputChangedHandler(event, 'email')} />
					</div>
					<div>
						<label htmlFor="msg">Message</label>
						<textarea id="msg" name="user_message" value={this.state.msg} onChange={(event) => this.inputChangedHandler(event, 'msg')} ></textarea>
					</div>
					<button type="submit" >Submit</button>
				</form>
			</Fragment>
		);
	}
}
export default Contact;