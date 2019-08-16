import React from "react";

function LoginContainer(props) {
	return (
		<div className="container-fluid w-50">
			<form>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input 
						type="text"
						className="form-control" 
						id="username" 
						placeholder="username" 
						value={props.username}
						onChange={props.handleUsernameChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input 
						type="password" 
						className="form-control" 
						id="password" 
						placeholder="password" 
						value={props.password}
						onChange={props.handlePasswordChange}
					/>
				</div>
				<div>
					<button 
						type="button" 
						className="btn btn-primary btn-lg btn-block" 
						onClick={props.handleLogin}
					>
						Login
					</button>
					<a 
						href="create" 
						className="btn btn-secondary btn-lg btn-block">
							Create Account
					</a>
				</div>
			</form>
		</div>
	);
}

export default LoginContainer;