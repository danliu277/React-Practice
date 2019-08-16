import React from 'react';

function AlertComponent(props) {
	const showContent = () => {
		return (
			<div className="alert alert-danger alert-dismissible fade show w-50 mx-auto" role="alert">
				{props.message}
				<button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={props.handleClose}>
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
		)
	}

	return (
		<div>
			{props.show && showContent()}
		</div>
	);
}

export default AlertComponent;