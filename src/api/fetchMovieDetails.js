import { makeRequest } from '../utils/api';
import API_URL from '../constants/api';

const fetchMovieDetails = async (id) => {
  const movieUrl = API_URL + id;
  const movieResponse = await makeRequest('get', movieUrl);
  const movie = movieResponse?.data;

  const characterRequests = movie?.characters?.map(async (characterUrl) => {
    const characterResponse = await makeRequest('get', characterUrl);
    return characterResponse?.data?.name;
  });
  const characters = await Promise.all(characterRequests);

  const planetsRequests = movie?.planets?.map(async (planetsUrl) => {
    const planetsResponse = await makeRequest('get', planetsUrl);
    return planetsResponse?.data?.name;
  });
  const planets = await Promise.all(planetsRequests);

  const speciesRequests = movie?.species?.map(async (speciesUrl) => {
    const speciesResponse = await makeRequest('get', speciesUrl);
    return speciesResponse?.data?.name;
  });
  const species = await Promise.all(speciesRequests);

  const starshipsRequests = movie?.starships?.map(async (starshipsUrl) => {
    const starshipsResponse = await makeRequest('get', starshipsUrl);
    return starshipsResponse?.data?.name;
  });
  const starships = await Promise.all(starshipsRequests);

  const vehicleRequests = movie?.vehicles?.map(async (vehiclesUrl) => {
    const vehiclesResponse = await makeRequest('get', vehiclesUrl);
    return vehiclesResponse?.data?.name;
  });
  const vehicles = await Promise.all(vehicleRequests);

  console.log('characters: ', characters);
  console.log('planets: ', planets);
  console.log('species: ', species);
  console.log('starships: ', starships);
  console.log('vehicles: ', vehicles);

  return movie;
};

export default fetchMovieDetails;
