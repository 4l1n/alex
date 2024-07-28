import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

const ListContainer = styled(List)({
	marginTop: '1.5rem',
});

const TableList = ({ tableData }) => {
	return (
		<ListContainer>
			{tableData.map((table, index) => (
				<ListItem key={index} style={{paddingLeft: 0}}>
					<ListItemText primary={`Sunteți la ${table.masa}`} />
				</ListItem>
			))}
		</ListContainer>
	);
}

export default TableList;
