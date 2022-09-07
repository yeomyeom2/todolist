import React, { useState, useRef } from 'react';

const Add = ({ addStatus, setTodos, todos }) => {
	const [valueTodo, setValueTodo] = useState('');
	const insertTodo = e => setValueTodo(e.target.value);
	const todoId = useRef(3);

	const addTodo = () => {
		const nextTodo = {
			id: todoId.current,
			text: valueTodo
		};
		setTodos(todos.concat(nextTodo)); //추가
		setValueTodo(''); //input value 초기화
		todoId.current += 1;
	};

	return (
		<div className={'box-add ' + addStatus}>
			<input type="text" onChange={insertTodo} value={valueTodo} />
			<button type='button' className='btn-add' onClick={addTodo}>Adición</button>
		</div>
	);
};

export default Add;