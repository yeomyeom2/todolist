import React, { useState } from 'react';

import Item from './component/Item';
import Add from './component/Add';

const App = () => {
	const [status, setStatus] = useState('');
	const addToggle = () => {
		setStatus(status === '' ? 'on' : '');
	};

	return (
		<div className="wrap">
			<h1>Lista de quehaceres</h1>
			<ul className="list-todo">
				<Item index="1"></Item>
				<Item index="2"></Item>
			</ul>
			<Add addStatus={status} />
			<button type='button' onClick={addToggle}>+</button>
		</div>
	);
};

export default App;