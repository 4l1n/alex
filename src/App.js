import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TableList from './components/TableList';
import tableData from './data/tableData';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const AppContainer = styled(Container)({
    marginTop: '2rem',
    overflow: 'hidden', // Asegura que no haya scrollbar en el contenedor principal
    width: '100%',
    height: '100%'
});

const Header = styled('h1')({
    textAlign: 'center',
    marginBottom: '2rem',
});

const NoResults = styled(Typography)({
    textAlign: 'center',
    marginTop: '2rem',
});

const Message = styled(Typography)({
    textAlign: 'center',
    marginTop: '2rem',
});

const normalizeString = (str) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
};

function App() {
    const [filteredTable, setFilteredTable] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [needLastName, setNeedLastName] = useState(false);

    const handleSearch = (name) => {
        const trimmedName = name.trim();
        const lowerCaseName = normalizeString(trimmedName);
        const result = tableData.filter(table =>
            table.nombres.some(n => {
                const lowerCaseFullName = normalizeString(n);
                const [firstName, lastName] = lowerCaseFullName.split(' ');
                return lowerCaseFullName.includes(lowerCaseName) ||
                    `${lastName} ${firstName}`.includes(lowerCaseName);
            })
        );

        if (result.length === 1) {
            setFilteredTable(result);
            setNoResults(false);
            setNeedLastName(false);
        } else if (result.length > 1) {
            setFilteredTable([]);
            setNoResults(false);
            setNeedLastName(true);
        } else {
            setFilteredTable([]);
            setNoResults(true);
            setNeedLastName(false);
        }
    };

    return (
        <AppContainer>
            <CssBaseline />
            <Header>Căutător de mese</Header>
            <SearchBar onSearch={handleSearch} />
            {noResults && <NoResults>Nu s-a găsit nici un rezultat</NoResults>}
            {needLastName && <Message>Introduceți numele de familie deoarece există mai multe persoane cu acest nume</Message>}
            {!noResults && !needLastName && <TableList tableData={filteredTable} />}
        </AppContainer>
    );
}

export default App;
