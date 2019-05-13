import api from '@/communications/api';

const state = {
  twits: [],
};

const getters = {
  getTwitByID: st => id => st.twits.find(twit => twit.id === id),
};

const mutations = {
  addTwits(st, twits) {
    st.twits = twits;
  },
  addTwit(st, twit) {
    st.twits.push(twit);
  },
};

const actions = {
  fetchTwits({ commit }) {
    api.getTwits().then((response) => {
      commit('addTwits', response.data);
    });
  },
  createTwit({ commit }, data) {
    api.createTwit(data).then((response) => {
      commit('addTwit', response.data);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
