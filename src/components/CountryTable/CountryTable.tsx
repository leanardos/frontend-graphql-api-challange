import { Country } from '../../types/country';
import './CountryTable.css';

interface Props {
	countries: Country[];
}

export default function CountriesTable({ countries }: Props) {
	return (
		<div className='table-container'>
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
							<td className='name-cell'>{country.name}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
