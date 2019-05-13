import axios from 'axios';

const login = payload => axios.post(`${API_URL}/login/`, payload);

const get = (url) => {
  const token = localStorage.getItem('token');
  return axios.get(url, {
    headers: { Authorization: `JWT ${token}` },
  });
};

const post = (url, data) => {
  const token = localStorage.getItem('token');
  return axios.post(url, data, {
    headers: { Authorization: `JWT ${token}` },
  });
};

const getProfile = () => get(`${API_URL}/profile/`);
const getTwits = () => get(`${API_URL}/twits/`);
const createTwit = data => post(`${API_URL}/twits/`, data);

export default {
  createTwit,
  getProfile,
  getTwits,
  login,
};
