import React from 'react';

const Item = ({ todo }) => {
	return (
		<li>
			<input type="checkbox" name="check" id={'check_' + todo.id} />
			<label htmlFor={'check_' + todo.id}>{todo.text}</label>
		</li>
	);
};

export default Item;