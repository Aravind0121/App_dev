import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AnimeList.css'; // Assuming you have styles for your AnimeList component

const AnimeList = ({ animes }) => {
  const navigate = useNavigate();

  const handleAnimeClick = (anime) => {
    // Navigate to the Detailspage with the selected anime
    navigate('/detailspage', { state: { video: anime } });
  };

  return (
    <div className="anime-list-container">
      <div className="anime-list">
        {animes.map((anime) => (
          <div 
            key={anime.id} 
            className="anime-card" 
            onClick={() => handleAnimeClick(anime)}
          >
            <img src={anime.image} alt={anime.title} className="anime-image" />
            <div className="anime-info">
              <h3 className="anime-title">{anime.title}</h3>
              <p className="anime-description">{anime.description}</p>
              <div className="anime-actions">
                <button className="play-button">▶️</button>
                <button className="add-button">➕</button>
                <button className="more-button">ℹ️</button>
              </div>
              <div className="anime-label">New</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
