import axios from 'axios';
import API_URL from '../../constants/api';

const makeRequest = async (method, path = API_URL) => {
  try {
    const response = await axios[method](`${path}`);
    return response;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};

const multipleEntityRequests = async (movie, entityType) => {
  const relatedEntityRequests = movie?.[entityType]?.map(async (relatedEntityUrl) => {
    const relatedEntityResponse = await makeRequest('get', relatedEntityUrl);
    return relatedEntityResponse?.data?.name;
  });
  const relatedEntities = await Promise.all(relatedEntityRequests);
  return { [entityType]: relatedEntities };
};

const getId = (url) => url.split('/').filter(Boolean).pop();

export { makeRequest, multipleEntityRequests, getId };
