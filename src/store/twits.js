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
};

const actions = {
  fetchTwits({ commit }) {
    api.getTwits().then((response) => {
      commit('addTwits', response.data);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
