import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import GameContainer from './GameContainer';
import GameCard from './GameCard';
import Test from './Test';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <h1>PlayList</h1>
          <a href='/game/new_game'>Add Game to Library</a>
          <h2>Filter By:</h2>
          <Link to='/'>All</Link>
          <br></br>
          <Link to={{pathname:'/sort'}}>Completion</Link>
          <div className='container'>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <Switch>
              <Route path='/sort'>
                <GameContainer />
              </Route>
              <Route path='/'>
                <GameContainer />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
