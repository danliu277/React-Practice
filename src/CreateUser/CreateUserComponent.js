import React, { useState } from "react"
import AlertComponent from '../Alert/AlertComponent'
import CreateUserContainer from './CreateUserContainer';

var data = require('../settings.json');

const CreateUserComponent = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState('');

	async function create(username, password) {
		let json = JSON.stringify({
			username: username,
			password: password
		});
	
		fetch(data.url + '/user/create', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: json
		}).then(res => {
			if (res.ok) {
				return res.json();
			}
		}).then(res => {
			console.log('res3: ', res)
			return res;
		}).catch(err => {
			console.log("Error ", err);
			setShow(true);
			setMessage('Error creating user');
			return err
		});
	}

	const handleUsernameChange = (event) => {
		if (event && event.target) {
			setUsername(event.target.value);
		}
	}

	const handlePasswordChange = (event) => {
		if (event && event.target) {
			setPassword(event.target.value);
		}
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		create(username, password);
	}
	
	const handleClose = () => {
		setShow(false);
	}

	return (
		<React.Fragment>
			<AlertComponent 
				show={show}
				message={message}
				handleClose={handleClose}
			/>
			<CreateUserContainer
				handleUsernameChange={handleUsernameChange}
				handlePasswordChange={handlePasswordChange}
				handleSubmit={handleSubmit}
			/>
		</React.Fragment>
	);
}

export default CreateUserComponent;