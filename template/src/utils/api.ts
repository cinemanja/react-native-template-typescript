import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import Config from 'react-native-config';

const axiosClient = axios.create();
axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Config.API_KEY}`;
  return config;
});

/**
 * Method for sending the GET request.
 *
 * @param path Additional API path.
 */
export const sendGetRequest = (path: string) => {
  // Check if there is a network connection first
  return NetInfo.fetch().then((state) => {
    if (state.isConnected) {
      return axiosClient
        .get(Config.API_URL + path)
        .then((response) => {
          return Promise.resolve(response);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    } else {
      return Promise.reject('No network. please check your connectivity.');
    }
  });
};
