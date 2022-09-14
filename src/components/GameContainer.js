import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

import GameCard from './GameCard';

class GameContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      games: [
        {
          title: 'Persona 5 Royal',
          release: 'March 31, 2020',
          rating: 5,
          completion_time: 150,
          completion_status: true,
          publisher: 'Sega',
          developer: 'Atlus',
          art_link: 'https://images-na.ssl-images-amazon.com/images/I/81BgoNw%2BWuL._SL1500_.jpg',
          genres: ['JRPG'],
          platform: ['PlayStation 4']
        }
      ],
      reloaded: false
    };
  }

  componentDidMount(){
    console.log(window.location.pathname);
    if (window.location.pathname === '/'){
      fetch('/game/')
        .then((res) => res.json())
        .then((games) => {
          if (!Array.isArray(games)) games = [];
          return this.setState({
            games
          });
        });
    }
  }

    

  render(){
    console.log(this.state);
    if (window.location.pathname.includes('/sort') && this.state.reloaded === false){
      fetch('/sort/completed_games')
        .then((res) => res.json())
        .then((games) => {
          if (!Array.isArray(games)) games = [];
          return this.setState({
            games,
            reloaded: true
          });
        });
    } else if (window.location.pathname === '/' && this.state.reloaded === true){
      fetch('/game/')
        .then((res) => res.json())
        .then((games) => {
          if (!Array.isArray(games)) games = [];
          return this.setState({
            games,
            reloaded: false
          });
        });
    }

    const { games } = this.state;

    const gameElems = games.map((game, i) => {
      let releaseDate = new Date(game.release);
      releaseDate = releaseDate.toDateString().split(' ').slice(1).join(' ');
      game.release = releaseDate;

      return (
        <div className='gameCard'>
          <GameCard key={i} info={game} />
        </div>
      );
    });
    console.log(gameElems);
    return (
      <div className="gameContainer">
        <h2>Game Library</h2>
        {gameElems}
      </div>
    );
  }


}

export default GameContainer;