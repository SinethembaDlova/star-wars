import axios from 'axios';
import API_URL from '../../constants/api';

const makeRequest = async (method, path = '') => {
  try {
    const response = await axios[method](`${API_URL}${path}`);
    return response;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};

const getId = (url) => url.split('/').filter(Boolean).pop();

export { makeRequest, getId };
