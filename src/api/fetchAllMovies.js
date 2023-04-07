import makeRequest from '../utils/api';

const fetchAllMovies = () => makeRequest('get');

export default fetchAllMovies;
