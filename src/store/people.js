import api from '@/communications/api';

const state = {
  profile: null,
  people: [],
};

const getters = {
  getProfile: st => st.profile,
  getPeople: st => st.people.filter(person => person.id !== st.profile.id),
};

const mutations = {
  setProfile(st, prof) {
    st.profile = prof;
  },
  setPeople(st, peop) {
    st.people = peop;
  },
};

const actions = {
  fetchProfile({ commit }) {
    return new Promise((resolve, reject) => {
      api.getProfile().then((response) => {
        commit('setProfile', response.data);
        resolve();
      }).catch((error) => {
        reject(error);
      });
    });
  },
  fetchPeople({ commit }) {
    return new Promise((resolve, reject) => {
      api.getPeople().then((response) => {
        commit('setPeople', response.data);
      }).catch(() => {
        reject();
      });
    });
  },
  login({ dispatch }, payload) {
    return new Promise((resolve) => {
      api.login(payload).then((response) => {
        localStorage.setItem('token', response.data.token);
        dispatch('fetchProfile').then(() => {
          resolve();
        });
      }).catch((error) => {
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
