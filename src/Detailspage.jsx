// src/Detailspage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Detailspage.css';
import { FaArrowLeft, FaInfoCircle, FaFacebookF, FaTwitter, FaRedditAlien, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Detailspage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

  const { video } = location.state || {};

  const handlePlay = (episode) => {
    navigate('/watch', { state: { video: episode } });
  };

  const handleBack = () => {
    navigate('/');
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  if (!video) {
    return <div>No video data available</div>;
  }

  const { title, image, duration, additionalInfo, description, episodes = [] } = video;

  return (
    <motion.div 
      className='detailspage'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='back-navigation'>
        <FaArrowLeft className='back-icon' onClick={handleBack}/>
        <p>Back</p>
      </div>

      <div className='details-container'>
        <motion.div 
          className='poster-section'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img src={image} alt={title} className='poster-img'/>
        </motion.div>
        
        <div className='info-section'>
          <h2 className='anime-title'>{title}</h2>
          <div className='info-tags'>
            <span>PG-13</span>
            <span>HD</span>
            <span onClick={toggleInfo} className='info-icon'><FaInfoCircle /></span>
            <span>{duration}</span>
          </div>

          {showInfo && (
            <div className='info-popup'>
              <p>{additionalInfo}</p>
            </div>
          )}

          <div className='button-group'>
            <button className='watch-now' onClick={() => handlePlay(episodes[0])}>Watch Now</button>
            <button className='add-to-list'>Add to List</button>
          </div>
          
          <p className='anime-description'>{description || 'No description available.'}</p>
          
          <div className='episodes'>
            {episodes.length > 0 ? (
              episodes.map((episode, episodeIndex) => (
                <motion.div
                  key={episodeIndex}
                  className='episode-card'
                  onClick={() => handlePlay(episode)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <p>{episodeIndex + 1}</p>
                  <span className='play-icon'>▶</span>
                </motion.div>
              ))
            ) : (
              <p>No episodes available.</p>
            )}
          </div>

          <div className='share-section'>
            <p>Share Anime</p>
            <div className='share-buttons'>
              <FaFacebookF className='share-icon facebook' />
              <FaTwitter className='share-icon twitter' />
              <FaRedditAlien className='share-icon reddit' />
              <FaShareAlt className='share-icon more' />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Detailspage;
