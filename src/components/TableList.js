import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const TableList = ({ tableData }) => {
	return (
		<List>
			{tableData.map((table, index) => (
				<ListItem key={index}>
					<ListItemText primary={table.masa} secondary={table.nombres.join(', ')} />
				</ListItem>
			))}
		</List>
	);
}

export default TableList;
