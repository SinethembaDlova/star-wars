import { makeRequest, getId } from '../utils/api';

const fetchAllMovies = async () => {
  const response = await makeRequest('get');
  const movies = response?.data?.results;
  const updatedMovies = movies.map((movie) => ({
    id: getId(movie.url),
    title: movie.title,
    director: movie.director,
    producer: movie.producer,
    release_date: movie.release_date,
  }));
  return updatedMovies;
};

export default fetchAllMovies;
