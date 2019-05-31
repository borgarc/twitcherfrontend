import Vue from 'vue';
import Vuex from 'vuex';
import people from '@/store/people';
import twits from '@/store/twits';
import replies from '@/store/reply';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    people,
    replies,
    twits,
  },
});
