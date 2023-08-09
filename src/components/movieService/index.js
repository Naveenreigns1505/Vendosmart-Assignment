import axios from 'axios';

const API_KEY = '0702c8a0ceefe38cb4379fd3f93c72dc';
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: { api_key: API_KEY, query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return [];
  }
};

export default searchMovies
