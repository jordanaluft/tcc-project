import React from "react";
import PropTypes from "prop-types";
import {
  Paper,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
  withStyles,
  Grid
} from "@material-ui/core";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 5,
    width: "40%"
  },
  table: {
    minWidth: 250
  }
});

let id = 0;
function createData(status) {
  id += 1;
  return { id, status };
}

const rows = [
  createData("Funcionando"),
  createData("Queimada"),
  createData("Funcionando"),
  createData("Funcionando"),
  createData("Funcionando")
];

function Status(props) {
  const { classes } = props;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Lamp Id</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  );
}

Status.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Status);
