import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {
  Paper,
  Grid,
  Typography,
  withStyles,
  Input,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 5,
    minWidth: 300,
    width: "35%"
  },
  input: {
    marginLeft: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  }
});

class New extends React.Component {
  state = {
    id: "",
    intensity: "",
    last_ping: "",
    status: "",
    latitude: "",
    longitude: "",
    isLoadign: false,
    hasError: false
  };

  sendData = () => {
    this.setState(
      {
        isLoading: true,
        hasError: false
      },
      () =>
        axios
          .post("http://localhost:8000/lampadas", {
            id: this.state.id,
            intensity: 123,
            last_ping: "0123-12-23T15:12:00-03:06",
            status: "broken",
            latitude: 321321.0,
            longitude: 32321.0
          })
          .then(() =>
            this.setState({
              isLoading: false,
              hasError: false,
              id: "",
              itensity: "",
              last_ping: "",
              status: "",
              latitude: "",
              longitude: ""
            })
          )
          .catch(() =>
            this.setState({
              isLoading: false,
              hasError: true
            })
          )
    );
  };

  render() {
    const { classes } = this.props;
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
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Typography variant="h5" component="h3">
                <Input
                  placeholder="Id"
                  className={classes.input}
                  disabled={this.state.isLoading}
                  value={this.state.id}
                  onChange={e => this.setState({ id: e.target.value })}
                  inputProps={{
                    "aria-label": "Description"
                  }}
                />
              </Typography>
              <p />
              <Typography variant="h5" component="h3">
                <Input
                  placeholder="Latitude"
                  className={classes.input}
                  disabled={this.state.isLoading}
                  value={this.state.latitude}
                  onChange={e => this.setState({ latitude: e.target.value })}
                  inputProps={{
                    "aria-label": "Description"
                  }}
                />
              </Typography>
              <p />
              <Typography variant="h5" component="h3">
                <Input
                  placeholder="Longitude"
                  className={classes.input}
                  disabled={this.state.isLoading}
                  value={this.state.longitude}
                  onChange={e => this.setState({ longitude: e.target.value })}
                  inputProps={{
                    "aria-label": "Description"
                  }}
                />
              </Typography>
              <p />
              <Button
                variant="contained"
                className={classes.button}
                onClick={this.sendData}
              >
                Save
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </div>
    );
  }
}
New.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(New);
