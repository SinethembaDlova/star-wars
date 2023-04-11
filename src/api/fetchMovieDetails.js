import { makeRequest, multipleEntityRequests } from '../utils/api';
import API_URL from '../constants/api';
import dateOnly from '../utils/date';

const fetchMovieDetails = async (id) => {
  const movieUrl = API_URL + id;
  const movieResponse = await makeRequest('get', movieUrl);
  const movie = movieResponse?.data;

  const entityTypes = ['characters', 'planets', 'species', 'starships', 'vehicles'];
  const relatedEntityData = await Promise.all(
    entityTypes.map((entityType) => multipleEntityRequests(movie, entityType))
  );

  const movieDetails = {
    title: movie?.title,
    opening_crawl: movie?.opening_crawl,
    director: movie?.director,
    producer: movie?.producer,
    created: dateOnly(movie?.created),
    edited: dateOnly(movie?.edited),
    release_date: movie?.release_date,
  };
  const movieDetailsWithEntities = {
    ...movieDetails,
    ...Object.assign({}, ...relatedEntityData),
  };
  return movieDetailsWithEntities;
};

export default fetchMovieDetails;
