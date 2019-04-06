import React from 'react';
import L from 'leaflet';
import styled from 'styled-components';
import { Grid, withStyles, Paper } from '@material-ui/core';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
  },
});

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

class MapRender extends React.Component {
  componentDidMount() {
    const map = L.map('map', {
      center: [-27.729579, -52.5357],
      zoom: 16,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
    }).addTo(map);

    let DefaultIcon = L.icon({
      iconUrl: icon,
      shadowUrl: iconShadow,
    });

    this.props.lampadas.forEach(lampada => {
      let latitude = lampada.latitude;
      let longitude = lampada.longitude;
      console.log(latitude);
      L.Marker.prototype.options.icon = DefaultIcon;
      L.marker([latitude, longitude]).addTo(map);
    });
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
            <Wrapper width="1080px" height="540px" id="map" />
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(MapRender);
