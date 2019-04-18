import api from '@/communications/api';

const state = {
  twits: [],
}

const getters = {
  getTwitByID: (state) => (id) => {
    return state.twits.find(twit => twit.id === id);
  },
};

const mutations = {
  addTwits (state, twits) {
    state.twits = twits;
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
