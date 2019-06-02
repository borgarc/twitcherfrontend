import _ from 'lodash';
import api from '@/communications/api';

const state = {
  twits: [],
};

const getters = {
  getTwits: st => st.twits,
  getTwitByID: st => id => st.twits.find(twit => twit.id === id),
};

const mutations = {
  addTwits(st, twits) {
    st.twits = twits;
  },
  addTwit(st, twit) {
    st.twits = _.unionBy(st.twits, [twit], 'id');
  },
};

const actions = {
  fecthTwit({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.getTwit(data).then((response) => {
        commit('addTwit', response.data);
        resolve(response.data);
      }).catch(() => {
        reject();
      });
    });
  },
  fetchTwits({ commit }, userID) {
    return new Promise((resolve, reject) => {
      api.getTwits(userID).then((response) => {
        commit('addTwits', response.data);
        resolve(response.data);
      }).catch(() => {
        reject();
      });
    });
  },
  createTwit({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.createTwit(data).then((response) => {
        commit('addTwit', response.data);
        resolve(response.data);
      }).catch(() => {
        reject();
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
