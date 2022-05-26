import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(ipAddress, macAddress, status, accessCount, timestamp) {
  return { ipAddress, macAddress, status, accessCount, timestamp };
}

const rows = [
  createData('172.27.16.13', '2Y:54:91:88:C9:E3', 6.0, 24, '2022-05-26 18:53:54.852'),
  createData('172.27.16.10', '2C:5A:14:23:C9:E3', 9.0, 37, '2022-05-26 18:53:52.224'),
  createData('172.27.16.9', '8A:54:91:88:C9:E3', 16.0, 24, '2022-05-26 18:51:24.829'),
  createData('172.27.16.32', '4A:54:91:88:C9:E3', 3.7, 67, '2022-05-26 18:43:44.735'),
  createData('172.27.16.14', '2G:54:91:88:C9:E3', 16.0, 49, '2022-05-26 18:43:39.958'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h3>IP-address</h3></TableCell>
            <TableCell align="right"><h3>MAC-address</h3></TableCell>
            <TableCell align="right"><h3>Status</h3></TableCell>
            <TableCell align="right"><h3>Access Count</h3></TableCell>
            <TableCell align="right"><h3>TIMESTAMP</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ipAddress}
              </TableCell>
              <TableCell align="right">{row.macAddress}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.accessCount}</TableCell>
              <TableCell align="right">{row.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
