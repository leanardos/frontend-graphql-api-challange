import { useEffect, useState } from 'react';
import './App.css';
import { Country } from './types/country';

export default function App() {
	const [userInput, setUserInput] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [countries, setCountries] = useState<Country[]>([]);

	async function fetchCountries() {
		try {
			setLoading(true);
			const response = { data: [{ code: 'SP', name: 'Spain' }] }; // TODO: implement api call
			console.log(response.data);
			setCountries(response.data);
		} catch (error) {
			console.error('Error while fetching countries:', error);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		const debounceTimer = setTimeout(() => {
			if (userInput) {
				fetchCountries();
			}
		}, 1000);

		return () => clearTimeout(debounceTimer);
	}, [userInput]);

	return (
		<div>
			<input
				type='text'
				placeholder='Type to filter'
				value={userInput}
				onChange={(event) => setUserInput(event.target.value)}
			/>

			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{countries.map((country) => (
						<li key={country.code}>{country.name}</li>
					))}
				</ul>
			)}
		</div>
	);
}
