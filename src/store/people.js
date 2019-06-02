import _ from 'lodash';
import api from '@/communications/api';

const initialState = {
  profile: null,
  people: [],
  newUser: {},
};

const getters = {
  getProfile: state => state.profile,
  getFollowedPeople: state => state.people.filter(
    person => state.profile.follows.some(p => p === person.id),
  ),
  getPeopleToBeFriends: (state) => {
    const exceptions = _.union([state.profile.id], state.profile.follows);
    return state.people.filter(person => !exceptions.some(exception => exception === person.id));
  },
  getPersonByID: st => personID => st.people.find(person => person.id === personID),
  getPeople: state => state.people,
};

const mutations = {
  setProfile(state, prof) {
    state.profile = prof;
  },
  setPeople(state, people) {
    state.people = people;
  },
  setFollowers(state, follows) {
    state.profile.follows = follows;
  },
  setNewUser(state, newUser) {
    state.newUser = newUser;
  },
};

const actions = {
  addUser({ commit }, data) {
    return new Promise((resolve, reject) => {
      api.createUser(data).then((response) => {
        commit('setNewUser', response.data);
        resolve(response.data);
      }).catch(() => {
        reject();
      });
    });
  },
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
        resolve();
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
  addFollower({ commit, state }, followID) {
    return new Promise((resolve, reject) => {
      const data = { follows: [...state.profile.follows, followID] };
      api.updateFollowers(state.profile.id, data).then((response) => {
        commit('setFollowers', response.data.follows);
        resolve(response.data);
      }).catch(() => {
        reject();
      });
    });
  },
  deleteFollower({ commit, state }, followID) {
    return new Promise((resolve, reject) => {
      const data = { follows: state.profile.follows.filter(p => p !== followID) };
      api.updateFollowers(state.profile.id, data).then((response) => {
        commit('setFollowers', response.data.follows);
        resolve(response.data);
      }).catch(() => {
        reject();
      });
    });
  },
  fetchFollowers({ commit, state }) {
    return new Promise((resolve, reject) => {
      api.getFollowers(state.profile.id).then((response) => {
        commit('setPeople', response.data);
        resolve(response.data);
      }).catch(() => {
        reject();
      });
    });
  },
};

export default {
  state: initialState,
  getters,
  mutations,
  actions,
};
