import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import List from './Status';
import Map from './Map';
import New from './New';
import Menu from './Menu';

const App = () => (
  <Router>
    <Menu />
    <Route exact path="/" component={List} />
    <Route exact path="/map" component={Map} />
    <Route exact path="/new" component={New} />
  </Router>
);

export default App;
