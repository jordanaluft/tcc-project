import React from "react";
import axios from "axios";

class List extends React.Component {
  state = {
    lampadas: []
  };

  getData = () => {
    axios.get("http://localhost:8000/lampadas").then(response => {
      console.log(response);
      this.setState({ lampadas: response.data });
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <ul>
        {this.state.lampadas.map(lampada => (
          <li key={lampada.id}>
            {lampada.id} {lampada.status}
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
