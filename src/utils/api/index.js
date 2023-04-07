import axios from 'axios';
import API_URL from '../../constants/api';

const makeRequest = async (method, data) => {
  try {
    const response = await axios[method](`${API_URL}`, data);
    return response?.data?.results;
  } catch (error) {
    throw new Error(`API request failed: ${error.message}`);
  }
};

export default makeRequest;
