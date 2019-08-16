import React from 'react';

function CreateUserContainer(props) {
	return (
		<div className="container-fluid w-50">
			<form onSubmit={props.handleSubmit}>
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
						type="submit" 
						className="btn btn-primary btn-lg btn-block" 
					>
						Create
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateUserContainer;