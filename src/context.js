import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  

  const topAiring = [
    { title: 'One Piece', episodes: 1114, rating: 1085, type: 'TV', image: './images/luffy.jpg' },
    { title: 'My Hero Academia Season 7', episodes: 13, rating: 11, type: 'TV', image: './images/heroo.jpg' },
    { title: 'The end of world', episodes: 9, rating: 11, type: 'TV', image: './images/worl.jpg' },
    { title: 'Kaiju 08', episodes: 12, rating: 6, type: 'TV', image: './images/kaiju 8.jpg' },
    { title: 'My girlfriend is dead', episodes: 2, rating: 19, type: 'TV', image: './images/dea.jpg' },
    
  ];
  
  const mostPopular = [
    { title: 'Parry', episodes: 11, rating: 300, type: 'TV', image: './images/parry.jpg' },
    { title: 'Naruto: Shippuden', episodes: 500, rating: 500, type: 'TV', image: './images/naruto.jpg' },
    { title: 'Black Clover', episodes: 50, rating: 300, type: 'TV', image: './images/black clover.jpg' },
    { title: 'Demon Slayer', episodes: 200, rating: 500, type: 'TV', image: './images/demon.jpg' },
    { title: 'king of another World', episodes: 500, rating: 500, type: 'TV', image: './images/kin.jpg' },
    
  ];
  
  const mostFavorite = [
    { title: 'Bleach', episodes: 209, rating: 105, type: 'TV', image: './images/bleacj.jpg' },
    { title: 'Chainsaw Man', episodes: 9, rating: 12, type: 'TV', image: './images/chain.jpg' },
    { title: 'Wind Breaker', episodes: 12, rating: 50, type: 'TV', image: './images/windbreaker.jpg' },
    { title: 'The New Gate', episodes: 8, rating: 40, type: 'TV', image: './images/new gate.jpg' },
    { title: 'Tokyo Revengers', episodes: 114, rating: 150, type: 'TV', image: './images/tokyo.jpg' },
   
    
  ];
  
  const latestCompleted = [
    { title: 'Death Note', episodes: 6, rating: 26, type: 'Special', image: './images/death note.jpg' },
    { title: 'Tokyo Ghoul', episodes: 24, rating: 11, type: 'TV', image: './images/goul.jpg' },
    { title: 'Class Room of Elite', episodes: 14, rating: 112, type: 'TV', image: './images/classroom.jpg' },
    { title: 'Haikyu', episodes: 11, rating: 105, type: 'TV', image: './images/haiku.jpg' },
    { title: 'Hunter X Hunter', episodes: 132, rating: 12, type: 'TV', image: './images/hxh.jpg' },
    
  ];
  
  
  
    
  const sampleAnimes = [
    { id: 1, title: 'Attack on Titans', image: './images/aot.jpg', videoUrl: 'https://hianime.to/watch/pseudo-harem-19246?ep=125812', description: 'A boy got attacked by a gaint human form  called titan', rank: 1 },
    { id: 2, title: 'One Piece', image: './images/luffy.jpg', description: 'Description here', rank: 2 },
    { id: 3, title: 'Solo Leveling', image: './images/solo.jpg', description: 'Description here', rank: 3 },
    { id: 4, title: 'Kaiju No:8', image: './images/kaiju 8.jpg', description: 'Description here', rank: 4 },
    { id: 5, title: 'Classroom of Elite', image: './images/classroom.jpg', description: 'Description here', rank: 5 },
    { id: 6, title: 'Bleach', image: './images/bleacj.jpg', description: 'Description here', rank: 6 },
    { id: 7, title: 'Demon Slayer', image: './images/demon.jpg', description: 'Description here', rank: 7 },
    { id: 8, title: 'Dragon', image: './images/dragon ball.jpg', description: 'Description here', rank: 8 },
    { id: 9, title: 'Naruto', image: './images/naruto.jpg', description: 'Description here', rank: 9 },
    { id: 10, title: 'Jujutsu Kaisen', image: './images/jjk.jpg', description: 'Description here', rank: 10 }, 
    { id: 11, title: 'Death Note', image: './images/death note.jpg', description: 'Description here', rank: 11 },
    { id: 12, title: 'Wind Breaker', image: './images/windbreaker.jpg', description: 'Fight Karooo', rank: 1 },
    { id: 13, title: 'Black Clover', image: './images/Black Clover.jpg', description: 'Description here', rank: 13 },
    { id: 14, title: 'Chainsaw Man', image: './images/chain.jpg', description: 'Description here', rank: 14 },
    { id: 15, title: 'Mahthae', image: './images/noo1.jpg', description: 'Description here' },
    { id: 16, title: 'Hero Academi', image: './images/heroo.jpg', description: 'Description here', rank: 16 },
    { id: 17, title: 'Tokyo Revengers', image: './images/tokyo.jpg', description: 'Description here', rank: 17 },
    { id: 18, title: 'Tokyo Ghoul', image: './images/goul.jpg', description: 'Description here' },
    { id: 19, title: 'Re:Monster', image: './images/re.jpg', description: 'Description here' },
    { id: 20, title: 'I Parry Everything', image: './images/parry.jpg', description: 'Description here'},
    { id: 21, title: 'Hunter x Hunter', image: './images/hxh.jpg', description: 'Description here', rank: 21 },
    { id: 22, title: 'Ninja Kamui', image: './images/ninja.jpg', description: 'Description here' },
    { id: 23, title: 'The New Gate', image: './images/new gate.jpg', description: 'Description here' },
    { id: 24, title: 'Haikyuu', image: './images/haiku.jpg', description: 'Description here', rank: 24 },
  ];
  
  
  const recentlyAddedItems = [
    { id: 4, title: 'Kaiju No:8', image: './images/kaiju 8.jpg', description: 'Description here', rank: 4 },
    { id: 5, title: 'Classroom of Elite', image: './images/classroom.jpg', description: 'Description here', rank: 5 },
    { id: 6, title: 'Bleach', image: './images/bleacj.jpg', description: 'Description here', rank: 6 },
    { id: 7, title: 'Demon Slayer', image: './images/demon.jpg', description: 'Description here', rank: 7 },
    { id: 8, title: 'Dragon', image: './images/dragon ball.jpg', description: 'Description here', rank: 8 },
    
  ];
  const mostViewedItems = [
    { id: 20, title: 'I Parry Everything', image: './images/parry.jpg', description: 'Description here'},
    { id: 21, title: 'Hunter x Hunter', image: './images/hxh.jpg', description: 'Description here', rank: 21 },
    { id: 22, title: 'Ninja Kamui', image: './images/ninja.jpg', description: 'Description here' },
    { id: 23, title: 'The New Gate', image: './images/new gate.jpg', description: 'Description here' },
    
    
    
  ];
  const scheduleItems = [
    { id: 1, name: 'Attack on Titans', time: '10:00 AM',episodeNumber:-1 },
    { id: 2, name: 'One Piece', time: '11:00 AM',episodeNumber:-1400 },
    { id: 3, name: 'Redo Healer', time: '1:40 PM',episodeNumber:-7 },
    { id: 4, name: 'Magic World', time: '3:00 PM',episodeNumber:-12 },
    { id: 5, name: 'Demon Slayer', time: '5:00 PM',episodeNumber:-33 },
    { id: 6, name: 'Gods Work', time: '9:00 PM' ,episodeNumber:-10},
    
  ];
  
  
  
  const trendingAnime = [
    { id: 1, title: 'One Piece', image: './images/luffy.jpg' },
    { id: 2, title: 'My Hero Academia', image: './images/heroo.jpg' },
    { id: 3, title: 'Alya Sometimes Hides Her Feelings in Russian', image: './images/russ.jpg' },
    { id: 4, title: 'Oshi No Ko', image: './images/oshi.jpg' },
    { id: 5, title: 'A Nobody\'s Way U.', image: './images/nobody.jpg' },
    { id: 6, title: 'Solo Leveling', image: './images/solo.jpg' },
    { id: 7, title: 'Demon Slayer', image: './images/demon.jpg' }, 
    { id: 8, title: 'Bleach', image: './images/bleacj.jpg' },
    { id: 9, title: 'Wind breaker', image: './images/windbreaker.jpg' },
    { id: 10, title: 'Tokyo Revengers', image: './images/Tokyo.jpg' },
    
  ];
  return (
    <Context.Provider value={{trendingAnime,scheduleItems,mostViewedItems,topAiring,mostPopular,mostFavorite,latestCompleted,sampleAnimes,recentlyAddedItems}}>
      {children}
    </Context.Provider>
  );
};