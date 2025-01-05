import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, TablePagination } from '@mui/material';
import { CustomCard } from './theme'
const MetafeatureTable = ({ data, theme }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState('mfLabel');
  const [order, setOrder] = useState('asc');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[orderBy];
    const bValue = b[orderBy];
    if (order === 'asc') {
      return aValue.localeCompare(bValue);
    }
    return bValue.localeCompare(aValue);
  });

  const slicedData = sortedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <div>
      <CustomCard>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'mfLabel'}
                    direction={order}
                    onClick={() => handleRequestSort('mfLabel')}
                  >
                    Metafeature Name
                  </TableSortLabel>
                </TableCell>
                <TableCell style={{ width: '30%' }}>
                  Value
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.mfLabel}</TableCell>
                  <TableCell>{row.mfValue}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </CustomCard>
      <br /> <br />
    </div>
  );
};

export default MetafeatureTable;
