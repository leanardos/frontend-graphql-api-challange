import { useState } from 'react';
import './App.css';

export default function App() {
	const [userInput, setUserInput] = useState<string>('');
	console.log({ userInput });

	return (
		<div>
			<input
				type='text'
				placeholder='Type to filter'
				value={userInput}
				onChange={(event) => setUserInput(event.target.value)}
			/>
		</div>
	);
}
