import React from "react";
import { Map } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";
import { Grid, withStyles, Paper } from "@material-ui/core";
import "leaflet/dist/leaflet.css";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3
  }
});

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

class MapRender extends React.Component {
  componentDidMount() {
    this.map = L.map("map", {
      center: [58, 16],
      zoom: 3,
      zoomControl: false
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17
    }).addTo(this.map);
  }
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
          <Paper className={classes.root}>
            <Wrapper width="1080px" height="540px" id="map" />;
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MapRender);
