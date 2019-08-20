import React from "react"
import history from '../history'
import HeaderContainer from "./HeaderContainer";

function HeaderComponent(props) {
	const {user, setUser} = props

	const handleLogIn = () => {
		history.push('/login')
	}

	const handleLogOut = () => {
		setUser(null);
		history.push('/')
	}

	return (
		<HeaderContainer 
			handleLogIn={handleLogIn}
			handleLogOut={handleLogOut}
			loggedIn = {user ? true : false}
		/>
	);
}

export default HeaderComponent;
