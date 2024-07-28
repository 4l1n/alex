import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import TableList from './components/TableList';
import tableData from './data/tableData';

function App() {
  const [filteredTable, setFilteredTable] = useState([]);

  const handleSearch = (name) => {
    const result = tableData.filter(table =>
        table.nombres.some(n => n.toLowerCase().includes(name.toLowerCase()))
    );
    setFilteredTable(result);
  };

  return (
      <div>
        <h1>Buscador de Mesas</h1>
        <SearchBar onSearch={handleSearch} />
        <TableList tableData={filteredTable} />
      </div>
  );
}

export default App;
