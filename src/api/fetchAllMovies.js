import { makeRequest, getId } from '../utils/api';

const fetchAllMovies = async () => {
  const movies = await makeRequest('get');
  const moviesWithIds = movies.map((movie) => ({ ...movie, movieId: getId(movie.url) }));
  return moviesWithIds;
};

export default fetchAllMovies;
