import api from '@/communications/api';

const state = {
  profile: null,
}

const getters = {
};

const mutations = {
  setProfile(state, profile) {
    state.profile = profile;
  },
};

const actions = {
  fetchProfile({ commit }) {
    return new Promise((resolve, reject) => {
      api.getProfile().then((response) => {
        commit('setProfile', response.data);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
    });
  },
  login({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      api.login(payload).then((response) => {
        localStorage.setItem('token', response.data.token);
        dispatch('fetchProfile').then(() => {
          resolve();
        })
      })
      .catch((error) => {
        throw new Error(error);
      });
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
