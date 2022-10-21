import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const LaunchTable = (props) => {
  
  if (!props.launches || !props.launches.length) return;

  const { launches } = props;

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 640, mt: 2, mb: 5, ml: "auto", mr: "auto" }}>
      <Table sx={{ minWidth: 640 }} size="small">
        <TableHead>
          <TableRow>
            <TableCell width="150">Date</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {launches.map((launch) => (
            <TableRow
              key={launch.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                {new Date(launch.date).toLocaleString('pt-BR')}
              </TableCell>
              <TableCell component="th" scope="row">
                {launch.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
  
export default LaunchTable;