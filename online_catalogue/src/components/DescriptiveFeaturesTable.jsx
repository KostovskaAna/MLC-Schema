import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel, TablePagination } from '@mui/material';
import { CustomCard } from './theme'
import Plot from 'react-plotly.js';
const DescriptiveFeaturesTable = ({ data, theme }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState('featureName');
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

  const layout_numeric = {
    autosize: true,
    height: 150,
    margin: {
      //   l: 20,
      //   r: 20,
      b: 40,
      t: 30
    },
    paper_bgcolor: 'rgba(0,0,0,0)', // Dark background for the overall plot area
    plot_bgcolor: 'rgba(0,0,0,0)',  // Same dark color for the plotting area
    font: {
      color: theme.palette.text.primary  // Light color for text for contrast
    },
    xaxis: {
      gridcolor: theme.palette.dimgray.main,  // Slightly lighter grid lines for visibility
      tickcolor: theme.palette.text.primary   // Light color for the axis ticks
    },
    yaxis: {
      gridcolor: theme.palette.dimgray.main,  // Slightly lighter grid lines for visibility
      tickcolor: theme.palette.text.primary   // Light color for the axis ticks
    },
    legend: {
      bgcolor: 'rgba(0,0,0,0)',  // Optional: make legend background transparent
      font: {
        color: theme.palette.text.primary   // Light color for legend text
      }
    }
  }

  const layout_nominal = {
    autosize: true,
    height: 150,
    margin: {
      l: 50,
      r: 20,
      b: 20,
      t: 20
    },
    paper_bgcolor: 'rgba(0,0,0,0)', // Dark background for the overall plot area
    plot_bgcolor: 'rgba(0,0,0,0)',  // Same dark color for the plotting area
    font: {
      color: theme.palette.text.primary  // Light color for text for contrast
    },
    xaxis: {
      gridcolor: theme.palette.dimgray.main,  // Slightly lighter grid lines for visibility
      tickcolor: theme.palette.text.primary   // Light color for the axis ticks
    },
    yaxis: {
      gridcolor: theme.palette.dimgray.main,  // Slightly lighter grid lines for visibility
      tickcolor: theme.palette.text.primary   // Light color for the axis ticks
    },
    legend: {
      bgcolor: 'rgba(0,0,0,0)',  // Optional: make legend background transparent
      font: {
        color: theme.palette.text.primary   // Light color for legend text
      }
    }
  }

  const config = {
    displayModeBar: false
  }

  return (

    <div>
      <br /> <br />
      <CustomCard>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'featureName'}
                    direction={order}
                    onClick={() => handleRequestSort('featureName')}
                  >

                    Feature Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'featureType'}
                    direction={order}
                    onClick={() => handleRequestSort('featureType')}
                  >
                    Type
                  </TableSortLabel>
                </TableCell>
                <TableCell style={{ width: '30%', textAlign: 'center' }}>
                  Distribution
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {slicedData.map((row) => (
                <TableRow key={row.featureName} >
                  <TableCell style={{ paddingTop: 0, paddingBottom: 0 }}><span style={{ color: theme.palette.secondary.main }}> {row.featureName}</span></TableCell>
                  <TableCell style={{ paddingTop: 0, paddingBottom: 0 }} >{row.featureType}</TableCell>
                  <TableCell style={{ display: 'flex', justifyContent: 'center', fontSize: 10, paddingTop: 10, paddingBottom: 10 }}>
                    {row.featureType === 'numeric' ?

                      <Plot
                        data={[
                          {
                            x: row.featureCharacteristic,
                            boxpoints: false,
                            type: 'box',
                            name: row.featureName
                          }
                        ]}
                        layout={layout_numeric}
                        config={config}
                        useResizeHandler={true}
                      />

                      :
                      <Plot
                        data={[
                          {
                            x: row.featureLabeles,
                            y: row.featureValues,
                            type: 'bar',
                            name: row.featureName
                          }
                        ]}
                        layout={layout_nominal}
                        config={config}
                        useResizeHandler={true}
                      />
                    }
                  </TableCell>
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

export default DescriptiveFeaturesTable;