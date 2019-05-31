import api from '@/communications/api';

const state = {
  replies: [],
};

const getters = {
  getRepliesByTwit: st => twitID => st.replies.filter(element => element.twit === twitID),
};

const mutations = {
  addReplies(st, replies) {
    st.replies = replies;
  },
  addReply(st, reply) {
    st.replies.push(reply);
  },
};

const actions = {
  fetchReplies({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.getReplies(data).then((response) => {
        commit('addReplies', response.data);
        resolve(response.data);
      }).catch(() => {
        reject();
      });
    });
  },
  createReply({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.createReply(data).then((response) => {
        commit('addReply', response.data);
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
