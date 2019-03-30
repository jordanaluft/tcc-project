import React from "react";
import PropTypes from "prop-types";
import { Paper, Grid, Typography, Fab, withStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 5,
    minWidth: 300,
    width: "35%"
  }
});

function New(props) {
  const { classes } = props;

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            Id:
          </Typography>
          <p />
          <Typography variant="h5" component="h3">
            Localização:
          </Typography>
          <p />
          <Fab aria-label="Add">
            <AddIcon />
          </Fab>
        </Paper>
      </Grid>
    </div>
  );
}

New.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(New);
