import React, { useState } from 'react';

import Item from './Item';

const List = ({ todos }) => {
	const todoList = todos.map(todo => <Item todo={todo} key={todo.id}>{todo.text}</Item>)

	return (
		<ul className="list-todo">
			{todoList}
		</ul>
	);
};

export default List;