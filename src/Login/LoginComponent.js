import React, {useState} from 'react';
import LoginContainer from './LoginContainer';

var data = require('../settings.json');

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
		return res.json();
	}).then(res =>{
		console.log(res);
	}).catch(err => {
		console.log("Error ", err);
		return err
	});
}

function LoginComponent() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUsernameChange = (event) => {
		if (event && event.target) {
			setUsername(event.target.value);
		}
	}

	const handlePasswordChange = (event) => {
		if(event && event.target) {
			setPassword(event.target.value);
		}
	}

	const handleLogin = async () => {
		await console.log(login(username, password));
	}

	return (
		<LoginContainer 
			username = {username}
			password = {password}
			handleUsernameChange = {handleUsernameChange}
			handlePasswordChange = {handlePasswordChange}
			handleLogin = {handleLogin}
		/>
	);
}

export default LoginComponent;