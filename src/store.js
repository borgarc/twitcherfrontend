import Vue from 'vue';
import Vuex from 'vuex';
import twits from '@/store/twits';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    twits,
  },
});
