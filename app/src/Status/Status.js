import React, { Component } from "react";
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
    width: "1000%"
  },
  table: {
    minWidth: 250
  }
});

function Status(props) {
  const { classes, lampadas } = props;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Lamp Id</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lampadas.map(lampada => (
              <TableRow key={lampada.id}>
                <TableCell component="th" scope="row">
                  {lampada.id}
                </TableCell>
                <TableCell align="right">{lampada.status}</TableCell>
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
