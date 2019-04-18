import Vue from 'vue';
import Vuex from 'vuex';
import profile from '@/store/profile';
import twits from '@/store/twits';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    profile,
    twits,
  },
});
