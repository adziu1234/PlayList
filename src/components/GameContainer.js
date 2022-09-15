import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';

import GameCard from './GameCard';

class GameContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      games: [
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
    const keySequence = [];
    let konamiString = '';
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a'
    ];
    window.addEventListener('keyup', function(e) {
      console.log(e.key);
      keySequence.push(e.key);
      keySequence.splice(
        -konamiCode.length - 1, 
        keySequence.length - konamiCode.length
      );
      console.log(keySequence);
      konamiString = konamiCode.join('');
    
      if (keySequence.join('').includes(konamiString)) {
        const music = new Audio('../shh/nggyu.mp3');
        music.play();
      }
    });
  }

    

  render(){
    console.log(this.state);
    if (window.location.pathname.includes('/sort/completed') && this.state.reloaded === false){
      fetch('/sort/completed_games')
        .then((res) => res.json())
        .then((games) => {
          if (!Array.isArray(games)) games = [];
          return this.setState({
            games,
            reloaded: !this.state.reloaded
          });
        });
    } else if (window.location.pathname.includes('/sort/switch') && this.state.reloaded === false) {
      fetch('/sort/switch')
        .then((res) => res.json())
        .then((games) => {
          if (!Array.isArray(games)) games = [];
          return this.setState({
            games,
            reloaded: !this.state.reloaded
          });
        });
    } else if (window.location.pathname.includes('/sort/ps') && this.state.reloaded === false) {
      fetch('/sort/ps')
        .then((res) => res.json())
        .then((games) => {
          if (!Array.isArray(games)) games = [];
          return this.setState({
            games,
            reloaded: !this.state.reloaded
          });
        });
    } else if (window.location.pathname.includes('/sort/xbox') && this.state.reloaded === false) {
      fetch('/sort/xbox')
        .then((res) => res.json())
        .then((games) => {
          if (!Array.isArray(games)) games = [];
          return this.setState({
            games,
            reloaded: !this.state.reloaded
          });
        });
    } else if (window.location.pathname === '/' && this.state.reloaded === true){
      fetch('/game/')
        .then((res) => res.json())
        .then((games) => {
          if (!Array.isArray(games)) games = [];
          return this.setState({
            games,
            reloaded: !this.state.reloaded
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
        {gameElems}
      </div>
    );
  }


}

export default GameContainer;