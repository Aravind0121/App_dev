// src/components/AnimeCard.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import './AnimeCard.css';

const AnimeCard = ({ anime }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push({
      pathname: '/video-player',
      state: { anime }
    });
  };

  return (
    <div className="anime-card" onClick={handleClick}>
      <img src={anime.image} alt={anime.title} className="anime-image" />
      <div className="anime-details">
        <h3 className="anime-title">{anime.title}</h3>
        <p>{anime.description}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
