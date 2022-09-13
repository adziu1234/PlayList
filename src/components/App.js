import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GameContainer from './GameContainer';
import GameCard from './GameCard';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h1>Hello world!</h1>
          <h2>Test</h2>
          <Link to='/'>Home</Link>
        </div>
        <GameContainer />
      </Router>
    );
  }

}

export default App;
