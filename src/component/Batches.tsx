import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

function createData(
  id: number,
  batchName: string,
  user: string,
  downloadLink: string
) {
  return { id, batchName, user, downloadLink };
}

const rows = [
  createData(1, "R1", "ahwar ali", "abc"),
  createData(2, "R1", "ahwar ali", "abc"),
  createData(3, "R1", "ahwar ali", "abc"),
  createData(4, "R1", "ahwar ali", "abc"),
  createData(5, "R1", "ahwar ali", "abc")
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <div>
        <b> Batches</b>
        {/* <Button variant="contained">Contained</Button> */}
      </div>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Batch Name</StyledTableCell>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Download Link</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.batchName}</StyledTableCell>
              <StyledTableCell>{row.user}</StyledTableCell>
              <StyledTableCell>{row.downloadLink}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
