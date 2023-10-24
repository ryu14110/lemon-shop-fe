import axios from 'axios';

/*
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
*/

export const apiClient = async ({
  url,
  method = 'GET',
  data = null,
  params = null,
  baseURL = 'http://localhost:4000',
  headers,
  config,
  withCredentials = true,
}) => {
  const result = await axios({
    method,
    url,
    data,
    params,
    baseURL,
    headers,
    withCredentials,
    timeout: 30000,
    ...config,
  });

  return result.data;
};
