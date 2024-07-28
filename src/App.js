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
    overflow: 'hidden',
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

const Bottom = styled(Typography)({
    textAlign: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 16
});

const Message = styled(Typography)({
    textAlign: 'center',
    marginTop: '2rem',
});

function App() {
    const [filteredTable, setFilteredTable] = useState([]);
    const [noResults, setNoResults] = useState(false);
    const [needLastName, setNeedLastName] = useState(false);

    const handleSearch = (name) => {
        const lowerCaseName = name.toLowerCase();
        const result = tableData.filter(table =>
            table.nombres.some(n => {
                const lowerCaseFullName = n.toLowerCase();
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
            <Bottom>Alex&Alexia</Bottom>
        </AppContainer>
    );
}

export default App;
