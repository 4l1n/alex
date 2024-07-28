import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = ({ onSearch }) => {
	const [name, setName] = useState('');

	const handleSearch = () => {
		onSearch(name);
	};

	return (
		<div>
			<TextField
				label="Busca tu nombre"
				variant="outlined"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Button variant="contained" color="primary" onClick={handleSearch}>
				Cautati
			</Button>
		</div>
	);
}

export default SearchBar;
