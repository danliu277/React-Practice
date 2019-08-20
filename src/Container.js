import React, { useState, createContext } from 'react'
import { Route, Router } from 'react-router-dom'

import LoginComponent from "./Login/LoginComponent"
import CreateUserComponent from "./CreateUser/CreateUserComponent"
import HomeContainer from "./Home/HomeContainer"
import HeaderComponent from "./Header/HeaderComponent"
import history from "./history";

export const UserContext = createContext();

function Container(props) {
	const [user, setUser] = useState({id:1, username:'a', password:'a'});

	const routing = (
		<Router history={history}>
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
			<HeaderComponent user={user} setUser={setUser} />
			{props.children}
			{routing}
		</React.Fragment>
	);
}

export default Container;