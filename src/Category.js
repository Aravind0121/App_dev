import React from 'react';
import './Category.css';

const Category = ({ title, animes }) => {
  return (
    <div className="category">
      <h2>{title}</h2>
      {animes.map((anime, index) => (
        <div key={index} className="anime-item">
          <img src={anime.image} alt={anime.title} />
          <div className="anime-info">
            <h3>{anime.title}</h3>
            <p>📺 {anime.episodes} 🗣️ {anime.rating} - {anime.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
