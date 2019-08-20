import React, { useState } from 'react';
import LoginContainer from './LoginContainer';
import AlertComponent from '../Alert/AlertComponent';

var data = require('../settings.json');

function LoginComponent(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [show, setShow] = useState(false);
	const [message, setMessage] = useState('');

	const {user, setUser} = props

	async function login(username, password) {
		let json = JSON.stringify({
			username: username,
			password: password
		});

		fetch(data.url + '/user/', {
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
			setUser(res);
		}).catch(err => {
			console.log("Error ", err);
			setShow(true);
			setMessage('Error logging in');
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

	const handleLogin = async () => {
		await login(username, password);
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
			<LoginContainer
				username={username}
				password={password}
				handleUsernameChange={handleUsernameChange}
				handlePasswordChange={handlePasswordChange}
				handleLogin={handleLogin}
			/>
		</React.Fragment>
	);
}

export default LoginComponent;