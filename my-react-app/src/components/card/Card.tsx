import React, { useEffect, useState } from 'react';
import { pageContext } from '../../App';
import './card.css';
import BookmarkImg from './assets/bookmark-white.png';
import FaboritesImg from './assets/star.png';
import { store } from '../../redux/store';
import { useSelector } from 'react-redux';

function Card() {
  const [films, setFilms] = useState([]);

  store.subscribe(() => {
    setFilms(store.getState().array);
  });

  return films.map((item) => (
    <div key={item.id} id={item.id} className="film-card">
      <img
        alt="cover"
        src={`https://image.tmdb.org/t/p/w500/${
          item.poster_path || item.backdrop_path
        }`}
      />
      <button type="button" className="favorite">
        <img alt="favorite" src={FaboritesImg} />
      </button>
      <button type="button" className="bookmark">
        <img alt="bookmark" src={BookmarkImg} />
      </button>
      <div className="info">
        <p> Рейтинг: {item.vote_average} </p>
        <p> {item.title} </p>
        <button type="button" className="info">
          <label htmlFor="info"> Подробнее </label>
        </button>
      </div>
    </div>
  ));
}

export { Card };
