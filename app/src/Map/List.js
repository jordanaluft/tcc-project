import React from 'react';
import axios from 'axios';
import MapRender from './MapRender';
import Progress from '../Progress';

class List extends React.Component {
  state = {
    lampadas: [],
    isLoading: true,
    hasError: false,
  };

  getData = () => {
    axios
      .get('http://localhost:8000/lampadas')
      .then(response => {
        this.setState({
          lampadas: response.data,
          isLoading: false,
          hasError: false,
        });
      })
      .catch(() =>
        this.setState({
          isLoading: false,
          hasError: true,
        }),
      );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    if (this.state.isLoading) return <Progress />;
    if (this.state.hasError) return 'Piolho comeu algo';
    return <MapRender lampadas={this.state.lampadas} />;
  }
}

export default List;
