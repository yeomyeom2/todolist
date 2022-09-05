import React, { useState } from 'react';

import List from './component/List';
import Add from './component/Add';

const App = () => {
	const [status, setStatus] = useState('');
	const addToggle = () => {
		setStatus(status === '' ? 'on' : '');
	};

	const [todos, setTodos] = useState([
		{id: '1', text: 'Estudiar español'},
		{id: '2', text: 'Hacer ejercicio'}
	]);
	console.log(todos)

	const [aa, setAa] = useState('');

	return (
		<div className="wrap">
			<h1>Lista de quehaceres</h1>
			<List todos={todos} />
			<Add addStatus={status} setTodos={setTodos} todos={todos} />
			<button type='button' onClick={addToggle}>+</button>
		</div>
	);
};

export default App;