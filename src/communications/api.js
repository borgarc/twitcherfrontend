import axios from 'axios';

const login = payload => axios.post(`${API_URL}/login/`, payload);

const get = (url) => {
  const token = localStorage.getItem('token');
  return axios.get(url, {
    headers: { Authorization: `JWT ${token}` },
  });
};

const getProfile = () => get(`${API_URL}/profile/`);
const getTwits = () => get(`${API_URL}/twits/`);

export default {
  getProfile,
  getTwits,
  login,
};
