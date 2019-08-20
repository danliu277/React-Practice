import React, { useState, createContext } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import LoginComponent from "./Login/LoginComponent"
import CreateUserComponent from "./CreateUser/CreateUserComponent"
import HomeContainer from "./Home/HomeContainer"

export const UserContext = createContext();

function Container(props) {
	const [user, setUser] = useState('test');

	const routing = (
		<Router>
			<div>
				<Route
					path="/login"
					render={(props) => <LoginComponent user={user} setUser={setUser} />}
				/>
				<Route
					path="/create"
					render={(props) => <CreateUserComponent {...props} />}
				/>
				<Route
					path="/"
					exact
					render={(props) => <HomeContainer {...props} />}
				/>
			</div>
		</Router>
	)

	return (
		<React.Fragment>
			{props.children}
			{routing}
		</React.Fragment>
	);
}

export default Container;