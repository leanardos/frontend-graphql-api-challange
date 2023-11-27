import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import { Country } from './types/country';
import CountriesTable from './components/CountryTable/CountryTable';
import { LIST_COUNTRIES } from './graphql/queries';
import client from './graphql/client';
import { useQuery } from '@apollo/client';

export default function App() {
	const [userInput, setUserInput] = useState<string>('');
	const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
	const { data, loading, error } = useQuery<{ countries: Country[] }>(
		LIST_COUNTRIES,
		{ client }
	);

	useLayoutEffect(() => {
		setFilteredCountries(data?.countries || []);
	}, [data?.countries]);

	useEffect(() => {
		const debounceTimer = setTimeout(() => {
			const filteredCountries = data?.countries?.filter((country) =>
				country.name.toLowerCase().includes(userInput.toLowerCase())
			);
			if (filteredCountries) {
				setFilteredCountries(filteredCountries);
			}
		}, 1000);

		return () => clearTimeout(debounceTimer);
	}, [userInput]);

	return (
		<div>
			<input
				className='filter'
				type='text'
				placeholder='Search countries...'
				value={userInput}
				onChange={(event) => setUserInput(event.target.value)}
			/>
			<div>
				<h3>Countries</h3>
				{loading || error ? (
					<p>{error ? error.message : 'Loading...'}</p>
				) : (
					<CountriesTable countries={filteredCountries} />
				)}
			</div>
		</div>
	);
}
