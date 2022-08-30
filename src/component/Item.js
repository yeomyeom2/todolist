import React from 'react';

const Item = props => {
	return (
		<li>
			<input type="checkbox" name="check" id={'check_' + props.index} />
			<label htmlFor={'check_' + props.index}>할 일 {props.index}</label>
		</li>
	);
};

export default Item;