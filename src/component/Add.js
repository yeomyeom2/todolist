import React, { useState } from 'react';

const Add = ({ addStatus, setTodos, todos }) => {
	const [valueTodo, setValueTodo] = useState('');
	const insertTodo = e => setValueTodo(e.target.value);

	const addTodo = () => {
		const nextTodo = {
			id: '3',
			text: 'test'
		};
		setTodos(todos.concat(nextTodo));
	};

	return (
		<div className={'box-add ' + addStatus}>
			<input type="text" onChange={insertTodo} />
			<button type='button' className='btn-add' onClick={addTodo}>Adición</button>
		</div>
	);
};

export default Add;