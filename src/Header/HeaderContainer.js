import React, { useState } from "react"
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap"

function HeaderContainer() {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="/">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="login">Login</Nav.Link>
			</Nav>
			<Form inline>
				<FormControl type="text" placeholder="Search" className="mr-sm-2" />
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
	)
}

export default HeaderContainer;