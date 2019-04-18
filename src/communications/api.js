import axios from "axios";

const getProfile = () => {
  return get(`${API_URL}/profile/`);   
};

const getTwits = () => {
  return get(`${API_URL}/twits/`);
};

const login = (payload) => {
  return axios.post(`${API_URL}/login/`, payload)
};

const get = (url) => {
  const token = localStorage.getItem('token');
  return axios.get(url, {
    headers: { 'Authorization': `JWT ${token}` },
  });
};

export default {
  getProfile,
  getTwits,
  login,
};
