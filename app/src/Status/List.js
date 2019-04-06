import React from 'react';
import axios from 'axios';
import Status from './Status';
import Progress from '../Progress';

class List extends React.Component {
  state = {
    lampadas: [],
    isLoading: true,
    hasError: false,
  };

  getData = () => {
    this.setState({ isLoading: true, hasError: false }, () => {
      this.request = axios
        .get('http://localhost:8000/lampadas')
        .then(response =>
          this.setState({
            lampadas: response.data,
            isLoading: false,
            hasError: false,
          }),
        )
        .catch(() =>
          this.setState({
            isLoading: false,
            hasError: true,
          }),
        );
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    let content;

    if (this.state.hasError) {
      content = 'Piolho comeu o cabo do servidor';
    } else if (this.state.isLoading) {
      content = <Progress />;
    } else {
      content = <Status lampadas={this.state.lampadas} />;
    }
    return content;
  }
}
export default List;
