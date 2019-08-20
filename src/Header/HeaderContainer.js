import React from "react"
import Octicon, { Person } from '@githubprimer/octicons-react'

function HeaderContainer(props) {
	const {handleLogIn, handleLogOut, loggedIn} = props;

	const logInOrOut = () => {
		if(!loggedIn) {
			return (
				<button className="dropdown-item" onClick={handleLogIn}>Log In</button>
			)
		}
		else {
			return (
				<button className="dropdown-item" onClick={handleLogOut}>Log Out</button>
			)
		}
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="/">Navbar</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
				<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">Disabled</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>

				<div className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
						aria-haspopup="true" aria-expanded="false" style={{color:"white"}}>
						<Octicon icon={Person}/>
					</a>
					<div className="dropdown-menu dropdown-menu-right dropdown-default"
						aria-labelledby="navbarDropdownMenuLink-333">
						{logInOrOut()}
						<a className="dropdown-item" href="#">Another action</a>
						<a className="dropdown-item" href="#">Something else here</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default HeaderContainer;