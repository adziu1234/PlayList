import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GameCard from './GameCard';

class GameContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      games: [
        {
          title: 'Persona 5 Royal',
          release: 'March 31 2020',
          rating: 5,
          completion_time: 150,
          completion_status: true,
          publisher: 'Sega',
          developer: 'Atlus',
          art_link: 'https://images-na.ssl-images-amazon.com/images/I/81BgoNw%2BWuL._SL1500_.jpg',
          genres: ['JRPG'],
          platform: ['PlayStation 4']
        }
      ]
    };
  }

  render(){
    const { games } = this.state;

    const gameElems = games.map((game, i) => {
      return (
        <GameCard
          key={i}
          info={game}
        />
      );
    });
    console.log(gameElems);
    return (
      <div className="gameContainer">
        <h3>Game Library</h3>
        {gameElems}
      </div>
    );
  }


}

export default GameContainer;