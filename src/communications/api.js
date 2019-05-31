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

const createReply = data => post(`${API_URL}/replies/`, data);
const createTwit = data => post(`${API_URL}/twits/`, data);
const getPeople = () => get(`${API_URL}/people/`);
const getProfile = () => get(`${API_URL}/profile/`);
const getReplies = twitID => get(`${API_URL}/replies/?twit=${twitID}`);
const getTwit = twitID => get(`${API_URL}/twits/${twitID}/`);
const getTwits = () => get(`${API_URL}/twits/`);

export default {
  createReply,
  createTwit,
  getPeople,
  getProfile,
  getReplies,
  getTwit,
  getTwits,
  login,
};
