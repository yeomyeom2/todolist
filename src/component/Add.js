import React from 'react';

const Add = ({ addStatus }) => {
	return (
		<div className={'box-add ' + addStatus}>
			<input type="text" />
		</div>
	);
};

export default Add;