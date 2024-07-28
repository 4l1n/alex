import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Container = styled('div')({
	display: 'grid',
	alignItems: 'center',
	gap: '1rem',
	marginBottom: '1.5rem',
});

const SearchBar = ({ onSearch }) => {
	const [name, setName] = useState('');

	const handleSearch = () => {
		onSearch(name);
	};

	return (
		<Container>
			<TextField
				label="Caută numele tău"
				variant="outlined"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<Button variant="contained" color="primary" onClick={handleSearch}>
				Căutați
			</Button>
		</Container>
	);
}

export default SearchBar;
