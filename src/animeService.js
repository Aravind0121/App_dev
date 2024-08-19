// src/api/animeService.js
const API_HOST = 'jikan1.p.rapidapi.com';
const API_KEY = 'df3acfed3emsh32ec2b95a1b9443p13ebf1jsnda73e2a9d833';

export const fetchPopularAnimes = async () => {
  try {
    const response = await fetch(`https://${API_HOST}/top/anime/1/upcoming`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
    });     
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.top; // Adjust according to the actual response structure
  } catch (error) {
    console.error('Error fetching popular animes:', error);
    return [];
  }
};

export const searchAnimes = async (query) => {
  try {
    const response = await fetch(`https://${API_HOST}/search/anime?q=${query}`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results; // Adjust according to the actual response structure
  } catch (error) {
    console.error('Error searching animes:', error);
    return [];
  }
};
