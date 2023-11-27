import { Country } from '../../types/country';
import './CountryTable.css';

interface Props {
	countries: Country[];
}

export default function CountriesTable({ countries }: Props) {
	return (
		<div>
			<h2>Countries</h2>
			<table className='center'>
				<thead>
					<tr>
						<th>Code</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{countries.map((country) => (
						<tr>
							<td>{country.code}</td>
							<td>{country.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
