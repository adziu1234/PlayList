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
              <Link to={{pathname:'/sort/completed'}} >Completion</Link>
              <Link to={{pathname:'/sort/switch'}} className="switchButton">Nintendo</Link>
              <Link to={{pathname:'/sort/ps'}} className="psButton">PS</Link>
              <Link to={{pathname:'/sort/xbox'}} className="xboxButton">Xbox/PC</Link>
            </div>
          </navbar>
          <div className='container' id="container">
            <div className="box">
              <div><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="green" className="bi bi-triangle" viewBox="0 0 16 16">
                <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"/>
              </svg></div>
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
              <Route path='/sort/xbox'>
                <GameContainer />
              </Route>
              <Route path='/sort/switch'>
                <GameContainer />
              </Route>
              <Route path='/sort/ps'>
                <GameContainer />
              </Route>
              <Route path='/sort/completed'>
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
