import { makeRequest } from '../utils/api';

const fetchMovieDetails = (id) => makeRequest('get', id);

export default fetchMovieDetails;
