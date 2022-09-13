import React from 'react';

const GameCard = (info) => {
  const { title, release, rating, completion_time, completion_status, publisher, developer, art_link, genres, platform} = info.info;
  console.log(info.info);
  return (
    <article className="card gameCard">

      <div className="gameHeadContainer">
        <h3 className='gameTitle'>{title}</h3>
      </div>
      <img src={art_link} width='100px'></img>
      <ul className= "gameDetailsList">
        <li>Completed: {completion_status}</li>
        <li>Completion Time: {completion_time} Hours</li>
        <li>Release Date: {release}</li>
        <li>Publisher: {publisher}</li>
        <li>Developer: {developer}</li>
        <li>Genres: {genres}</li>
        <li>Platforms: {platform}</li>
        <li>Rating: {rating}</li>
      </ul>
    </article>
  );
};

export default GameCard;