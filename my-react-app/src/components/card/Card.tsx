import React from 'react';
import './Card.css';
import { Button } from '../button/Button';

function Card({ data }) {
  return data.map((item) => (
    <div key={item.id} id={item.id} className="film-card">
      <img
        alt="cover"
        src={`https://image.tmdb.org/t/p/w500/${
          item.poster_path || item.backdrop_path
        }`}
      />
      <button type="button" className="favorites">
        <label htmlFor="favorites">+</label>
      </button>
      <button type="button" className="watch-later">
        <label htmlFor="favorites">la</label>
      </button>

      <div className="info">
        <p> Рейтинг: {item.vote_average} </p>
        <p> {item.title} </p>
        <button type="button" className="info">
          <label htmlFor="info">info</label>
        </button>
      </div>
    </div>
  ));
}

export { Card };
