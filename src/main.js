import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHeart,
  faRetweet,
  faComment,
  faHome,
  faCommentDots,
  faUsers,
  faUserPlus,
  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from '../node_modules/axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.prototype.$http = axios;

library.add(faHeart);
library.add(faRetweet);
library.add(faComment);
library.add(faHome);
library.add(faCommentDots);
library.add(faUsers);
library.add(faUserPlus);
library.add(faPlus);
library.add(faMinus);

Vue.component('Icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
