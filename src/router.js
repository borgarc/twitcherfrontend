import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import NewTwit from './components/NewTwit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/new',
      name: 'new',
      components: {
        default: NewTwit,
        header: Header,
        menu: Menu,
      },
    },
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        header: Header,
        menu: Menu,
      },
    },
  ],
});
