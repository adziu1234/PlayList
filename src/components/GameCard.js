import React from 'react';

const GameCard = (info) => {
  const { title, release, rating, completion_time, completion_status, publisher, developer, art_link, genres, platform} = info.info;
  let completion_icon;

  async function deleter(e){
    const target = await e;
    const titleToDelete = target.target.parentNode.firstChild.innerText;
    const body = await title;
    fetch((`/game/delete/${titleToDelete}`), {
      method: 'DELETE',
      body: JSON.stringify(titleToDelete)
    }).then(() => window.location.reload());
  }

  async function updater(e){
    const target = await e;
    const titleToUpdate = target.target.parentNode.firstChild.innerText;
    window.location.href = '/game/update/' + titleToUpdate;
  }

  if (completion_status){
    completion_icon = '✔️';
  } else {
    completion_icon = '❌';
  }

  return (
    <article className="card gameCard">

      <div className="gameHeadContainer">
        <h3 className='gameTitle'>{title}</h3>
      </div>
      <img src={art_link} width='100px'></img>
      <ul className= "gameDetailsList">
        <li>Completed: {completion_icon}</li>
        <li>Completion Time: {completion_time} hours</li>
        <li>Release Date: {release}</li>
        <li>Publisher: {publisher}</li>
        <li>Developer: {developer}</li>
        <li>Genres: {genres.join(', ')}</li>
        <li>Platforms: {platform.join(', ')}</li>
        <li>Rating: {rating}</li>
      </ul>
      <button onClick={updater}>Update Me</button>
      <button onClick={deleter}>Delete Me</button>
    </article>

  );
};

export default GameCard;