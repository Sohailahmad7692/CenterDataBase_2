import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import styles from "styled-components";
import { useNavigate } from "react-router-dom";

const Heading = styles.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 30px;
`;

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
  name: string,
  batchNumber: number,
  user: string,
  finger1: string,
  finger2: string,
  finger3: string,
  finger4: string
) {
  return { id, name, batchNumber, user, finger1, finger2, finger3, finger4 };
}

const rows = [
  createData(1, "sohail Ahmad", 1, "sohail ahmad", "abc", "bcd", "dce", "efg"),
  createData(2, "sohail Ahmad", 1, "sohail ahmad", "abc", "bcd", "dce", "efg"),
  createData(3, "sohail Ahmad", 1, "sohail ahmad", "abc", "bcd", "dce", "efg"),
  createData(4, "sohail Ahmad", 1, "sohail ahmad", "abc", "bcd", "dce", "efg"),
  createData(5, "sohail Ahmad", 1, "sohail ahmad", "abc", "bcd", "dce", "efg")
];

export default function CustomizedTables() {
  const navigate = useNavigate();
  return (
    <TableContainer component={Paper}>
      <Heading>
        <b> Students</b>
        <Button variant="contained" onClick={() => navigate("/addStudent")}>
          Add Student
        </Button>
      </Heading>{" "}
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Batch Number</StyledTableCell>
            <StyledTableCell>User</StyledTableCell>
            <StyledTableCell>Finger 1</StyledTableCell>
            <StyledTableCell>Finger 2</StyledTableCell>
            <StyledTableCell>Finger 3</StyledTableCell>
            <StyledTableCell>Finger 4</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              {/* <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell> */}
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.batchNumber}</StyledTableCell>
              <StyledTableCell>{row.user}</StyledTableCell>
              <StyledTableCell>{row.finger1}</StyledTableCell>
              <StyledTableCell>{row.finger2}</StyledTableCell>
              <StyledTableCell>{row.finger3}</StyledTableCell>
              <StyledTableCell>{row.finger4}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
