import React from 'react';

function AlertComponent(props) {
	const showContent = () => {
		return (
			<div class="alert alert-danger" role="alert">
				{props.message}
			</div>
		)
	}

	return (
		<div>
			{ props.show && showContent() }
		</div>
	);
}

export default AlertComponent;