import React from 'react';

const GameCard = (info) => {
  const { title, release, rating, completion_time, completion_status, publisher, developer, art_link, genres, platform} = info.info;
  let completion_icon;

  async function deleter(e){
    const target = await e;
    console.log(e);
    const body = await title;
    fetch((`/game/delete/${title}`), {
      method: 'DELETE',
      body: JSON.stringify(title)
    }).then(() => window.location.reload());
  }

  async function updater(e){
    const target = await e;
    const titleToUpdate = title;
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
      <div className="imgBox">
        <img src={art_link} width='100px'></img>
      </div>
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
      <div className="buttonArea">
        <button onClick={updater} className="updateButton cardButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
</svg></button>
        <button onClick={deleter} className="deleteButton cardButton"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg></button>
      </div>
    </article>

  );
};

export default GameCard;