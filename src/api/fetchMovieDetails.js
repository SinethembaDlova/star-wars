import { makeRequest } from '../utils/api';
import API_URL from '../constants/api';

const fetchMovieDetails = async (id) => {
  const path = API_URL + id;
  const response = await makeRequest('get', path);
  const movie = response?.data;
  return movie;
};

export default fetchMovieDetails;
