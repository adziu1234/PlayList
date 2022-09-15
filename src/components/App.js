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
          <navbar>
            <h1>PlayList</h1>
            <a href='/game/new_game' className="addButton">Add Game to Library</a>
            <div className="filters">
              <h3>Filter By:</h3>
              <Link to='/'>All</Link>
              <br></br>
              <Link to={{pathname:'/sort'}}>Completion</Link>
            </div>
          </navbar>
          <div className='container'>
            <div className="box">
              <div></div>
              <div></div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="green" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg></div>
              <div><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="blue" className="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg></div>
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
          <footer>
            <h3>Made By <a href='https://www.linkedin.com/in/adrian-reczek-7b2816230/'>Adrian Reczek</a> 2022</h3>
          </footer>
        </div>
      </Router>
    );
  }

}

export default App;
