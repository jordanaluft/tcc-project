import React from "react";
import { Link } from "react-router-dom";
import { Paper, Tabs, Tab } from "@material-ui/core";

class Menu extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <Paper>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Status" to="/" component={Link} />
          <Tab label="Map" to="/map" component={Link} />
          <Tab label="New" to="/new" component={Link} />
        </Tabs>
      </Paper>
    );
  }
}

export default Menu;
