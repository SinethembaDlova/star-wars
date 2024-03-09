import { makeRequest, getId } from '../utils/api';

const fetchAllMovies = async () => {
  const response = await makeRequest('get');
  const movies = response?.data?.results;
  const updatedMovies = movies.map((movie) => ({
    id: getId(movie.url),
    title: movie.title,
    producer: movie.producer,
    release_date: movie.release_date,
    opening_crawl: movie.opening_crawl,
  }));
  return updatedMovies;
};

export default fetchAllMovies;
