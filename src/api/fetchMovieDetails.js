import { makeRequest } from '../utils/api';

const fetchMovieDetails = async (id) => {
  const response = await makeRequest('get', id);
  const movie = response?.data;
  return movie;
};

export default fetchMovieDetails;
