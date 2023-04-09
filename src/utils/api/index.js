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

const multipleRequests = async (urlList) => {
  urlList.map(async (url) => {
    const characterResponse = await makeRequest('get', url);
    return characterResponse?.data;
  });
};

const getId = (url) => url.split('/').filter(Boolean).pop();

export { makeRequest, multipleRequests, getId };
