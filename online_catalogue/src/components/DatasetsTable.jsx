// DatasetsTable.js
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
} from '@mui/material';

import { CustomCard, DatasetLink } from './theme'

// Function to create a stable sort
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// Comparator function used for sorting
function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}


function descendingComparator(a, b, orderBy) {
  // Convert both values to lowercase for case-insensitive comparison
  if (orderBy === 'datasetLabel') {
    const aValueLower = a[orderBy].toLowerCase();
    const bValueLower = b[orderBy].toLowerCase();

    if (bValueLower < aValueLower) {
      return -1;
    }
    if (bValueLower > aValueLower) {
      return 1;
    }
    return 0;
  }

  // If both values are numbers, compare them as numbers
  if (!isNaN(Number(a[orderBy])) && !isNaN(Number(b[orderBy]))) {
    return Number(b[orderBy]) - Number(a[orderBy]);
  }

  // If one or both values are not numbers, compare them as strings
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


// Main table component
function DatasetsTable({ datasets }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('datasetLabel');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  // Handling sort request
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Change page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Change rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Header cell information
  const headCells = [
    { id: 'datasetLabel', numeric: false, disablePadding: true, label: 'Dataset Name' },
    { id: 'numInstances', numeric: true, disablePadding: false, label: 'No of Instances' },
    { id: 'numDescriptive', numeric: true, disablePadding: false, label: 'No of Descriptive Features' },
    { id: 'numTargets', numeric: true, disablePadding: false, label: 'No of Labels' },
    { id: 'hasMissingValues', numeric: false, disablePadding: false, label: 'Missing Values' },
  ];

  // Sort function: creates sort handler for each header
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  return (
    <div>
      <br /> <br />
      <CustomCard>
        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <TableHead>
              <TableRow>
                {headCells.map((headCell) => (
                  <TableCell
                    key={headCell.id}
                    align={'center'}
                    padding={headCell.disablePadding ? 'none' : 'normal'}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : 'asc'}
                      onClick={createSortHandler(headCell.id)}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(datasets, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.dsetInstance}
                    >
                      <TableCell component="th" id={labelId} scope="row" style={{ padding: '10px' }}>
                        {/* {<a className="DatasetPaperSmallHighlight" target="_blank" rel="noopener noreferrer" href={'#/Dataset/' + row.datasetLabel}>{row.datasetLabel}</a>} */}
                        {<DatasetLink  target="_blank" rel="noopener noreferrer" to={'/Dataset/' + row.datasetLabel}>{row.datasetLabel}</DatasetLink>}
                      </TableCell>
                      <TableCell align="center">{row.numInstances}</TableCell>
                      <TableCell align="center">{row.numDescriptive}</TableCell>
                      <TableCell align="center">{row.numTargets}</TableCell>
                      <TableCell align="center">{row.hasMissingValues.toString()}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50, 100]}
          component="div"
          count={datasets.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </CustomCard>
      <br /> <br /> <br /> <br />
    </div>

  );
}

export default DatasetsTable;
